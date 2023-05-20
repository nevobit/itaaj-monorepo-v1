import React, { useEffect, useState } from 'react';
import { Button, Field, Input, Layout, Loader } from "@/components";
import Breadcrumbs from "@/components/Shared/Breadcumbs";
import HeaderPage from "@/container/HeaderPage";
import Table from "@/container/Table";
import { Link } from "react-router-dom";
import styles from "./Properties.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProperties, getProperties, resetProperties } from '@/redux/states';
import { AppStore } from '@/redux/store';
import EmptyTable from '@/container/EmptyTable';
import axios from 'axios';
const Proposals = () => {
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  
  // const { loading, result, success } = useSelector((state: AppStore) => state.properties);

  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(false);
  
  const getProposals = async () => {
    setLoading(true);
    const { data } = await axios.get('http://localhost:8000/api/v1/proposals');
    setResult(data);
    setLoading(false);
  }
  const dispatch = useDispatch();
  
  const deleteItem = (uuid: string) => {
    dispatch(deleteProperties(uuid) as any);
  };

  useEffect(() => {
      // dispatch(getProperties({ limit, page, search }) as any);
      getProposals();
  }, [limit, page, search]);
  
  return (
    <Layout>
      <HeaderPage title="Proposals">
        <Breadcrumbs items={["Realty", "Proposals"]} />
      </HeaderPage>
      <div className={styles.header_page}>
        <Field>
          <Input type="search" placeholder="Search proposals" onChange={({ target }) => setSearch(target.value)} />
        </Field>
        {/* <Link to="/properties/create">Add Property</Link> */}
      </div>
      
      {loading ? (
        <Loader />
      ) : (
       <>
             {result?.count > 0? (
        <Table  
        count={result?.count}
        data={result?.items}
        setLimit={setLimit}
        limit={limit}
        setPage={setPage}
        headers={['Name', 'Email', 'Phone', 'economic_proposal', 'fund']}
        deleteItem={deleteItem}
        setItemSelected={() => {}}
        />
      ): (
        <EmptyTable title='Proposals' url='/proposals/create'  />
      )}
       </> 
      )}

      
    </Layout>
  );
};

export default Proposals;
