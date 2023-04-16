import React, { useEffect, useState } from 'react';
import { Button, Field, Input } from "@/components";
import Breadcrumbs from "@/components/Shared/Breadcumbs";
import HeaderPage from "@/container/HeaderPage";
import Table from "@/container/Table";
import { Link } from "react-router-dom";
import styles from "./Properties.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProperties, resetProperties } from '@/redux/states';
import { AppStore } from '@/redux/store';
import EmptyTable from '@/container/EmptyTable';
const Properties = () => {
  const [limit, setLimit] = useState<number>(5000);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  
  const { loading, result, success } = useSelector((state: AppStore) => state.properties);

  console.log(result);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProperties({ limit, page, search }) as any);
      if (success) {
          dispatch(resetProperties() as any);
      }
  }, [dispatch, success, limit, page, search]);
  
  return (
    <div>
      <HeaderPage title="Properties">
        <Breadcrumbs items={["Realty", "Properties"]} />
      </HeaderPage>
      <div className={styles.header_page}>
        <Field>
          <Input type="Search" placeholder="Search properties" />
        </Field>
        <Link to="/properties/create">Add Property</Link>
      </div>
      {result.count > 0? (
        <Table  
        count={result.count}
        data={result.items}
        setLimit={setLimit}
        limit={limit}
        setPage={setPage}
        headers={['Name', 'Address', 'Country', 'Price']}
        deleteItem={() => {}}
        setItemSelected={() => {}}
        />
      ): (
        <EmptyTable title='Properties' url='/properties/create'  />
      )}
      
    </div>
  );
};

export default Properties;
