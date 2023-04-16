import { Property, Result } from '@itaaj/types';
import { itaajApi } from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Props {
    limit: number;
    page: number;
    search: string;
}


export const getProperties = createAsyncThunk<Result<Property>, Props>('properties/getBrands', async (props) => {
    const { data } = await itaajApi.get(`/properties?page=${props.page}&limit=${props.limit}&search=${props.search}`);
    // Only for JSON-SERVER requests
    const result: Result<Property> = {
        count: data.length,
        items: data,
        pageInfo: {
            page: 1,
    pages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    nextPage: 1,
    previousPage: 1
        }
        
    } 
    
    console.log(result)
    return result;
});

export const createProperties = createAsyncThunk<Partial<Property>, any>('properties/create', async (brand) => {
    const { data } = await itaajApi.post('/properties', brand);
    return data;
});

export const updateProperties = createAsyncThunk<Property, Property>('properties/update', async (brand) => {
    const { data } = await itaajApi.put('/properties', brand);
    return data;
});

export const deleteProperties = createAsyncThunk('properties/delete', async (uuid: string) => {
    const { data } = await itaajApi.delete(`/properties/${uuid}`);
    return data;
});
