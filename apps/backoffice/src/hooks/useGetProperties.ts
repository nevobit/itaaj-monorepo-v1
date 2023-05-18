import { getProperties } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useGetProperties = () => {
 const [limit, setLimit] = useState<number>(5);
 const [page, setPage] = useState<number>(1);
 const [search, setSearch] = useState<string>('');
 
 const { loading, result } = useSelector((state: AppStore) => state.properties);

 const dispatch = useDispatch();

 useEffect(() => {
     dispatch(getProperties({ limit, page, search }) as any);
 }, [dispatch, limit, page, search]);
 
 return {
   loading,
   properties: result
 }
}