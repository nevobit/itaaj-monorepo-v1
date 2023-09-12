import React, { useEffect, useState } from 'react';
import { Button, Field, Input, Layout, Loader } from "@/components";
import Breadcrumbs from "@/components/Shared/Breadcumbs";
import HeaderPage from "@/container/HeaderPage";
import Table from "@/container/Table";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Properties.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProperties, getProperties, resetProperties } from '@/redux/states';
import { AppStore } from '@/redux/store';
import EmptyTable from '@/container/EmptyTable';
import { PrivateRoutes } from '@/constant-definitions';
import XLSX from 'sheetjs-style';
import ExportExcel from '@/utilities/ExportToExcel';

const Properties = () => {
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const { loading, result, success } = useSelector((state: AppStore) => state.properties);

  const dispatch = useDispatch();
  
  const deleteItem = (uuid: string) => {
    dispatch(deleteProperties(uuid) as any);
  };

  useEffect(() => {
      dispatch(getProperties({ limit, page, search }) as any);
      if (success) {
          dispatch(resetProperties() as any);
      }
  }, [dispatch, success, limit, page, search]);


  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charet=UTF-8';
  const fileExtension = '.xlsx';


  
  return (
    <Layout>
      <HeaderPage title="Properties">
        <Breadcrumbs items={["Realty", "Properties"]} />
      </HeaderPage>
      <div className={styles.header_page}>
        <Field>
          <Input type="search" placeholder="Search properties" onChange={({ target }) => setSearch(target.value)} />
        </Field>
        <span>
        <ExportExcel items={result.items} />
        <Link to="/properties/create">Add Property</Link>
        </span>

      </div>
      
      {loading ? (
        <Loader />
      ) : (
       <>
             {result.count > 0? (
        <Table  
        count={result.count}
        data={result.items}
        setLimit={setLimit}
        limit={limit}
        setPage={setPage}
        headers={['Name', 'Address', 'Country', 'Price']}
        deleteItem={deleteItem}
        setItemSelected={({slug}:{slug: string}) => {
          navigate(`${PrivateRoutes.PROPERTIES}/${slug}`)   
        }}
        />
      ): (
        <EmptyTable title='Properties' url='/properties/create'  />
      )}
       </> 
      )}

      
    </Layout>
  );
};

export default Properties;
