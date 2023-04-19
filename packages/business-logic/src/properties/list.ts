import { Property, PropertySchema, Result, StatusType } from '@itaaj/entities';

interface Query{
 search?: string;
 name?: {};
 status?: StatusType;
}
/**
 * Return an list paginated of properties.
 * @param page Consult the page number by default (1).
 * @param limit Number of elements per page by defualt (14).
 * @returns A promise that resolve with a object `Result<Property>` that container paginated element list.
 */
export const getAllProperties = async(page:number, limit:number, search: string): Promise<Result<Property>> => {
 
 const query: Query = {status: StatusType.ACTIVE};
 if(search){
   query.name = { $regex: search, $options: 'i' }
 }
 
 const actualPage = Number(page) || 1;
 const pageSize = Number(limit) || 14;
 const skip = (actualPage - 1) * pageSize;
 
 const products = await PropertySchema.find() as any;
 
 const total = products.length;
 
 const pages = Math.ceil(total / pageSize);

 const hasPreviousPage = Number(page) > 1;
 const previousPage = hasPreviousPage ? Number(page) - 1 : Number(page);
 const hasNextPage = Number(actualPage) < pages;
 const nextPage = hasNextPage ? Number(actualPage) + 1 : Number(page);
 
 return {
  count: total,
  items: products,
  pageInfo: {
    page: actualPage,
    pages,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
  }
};
}