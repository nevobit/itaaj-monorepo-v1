import React, { useEffect, useState } from 'react';
import { Button, Field, Input } from "@/components";
import Breadcrumbs from "@/components/Shared/Breadcumbs";
import HeaderPage from "@/container/HeaderPage";
import Table from "@/container/Table";
import { Link } from "react-router-dom";
import styles from "./Properties.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, resetPosts } from '@/redux/states';
import { AppStore } from '@/redux/store';
import EmptyTable from '@/container/EmptyTable';
const Posts = () => {
  const [limit, setLimit] = useState<number>(5000);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  
  const { loading, result, success } = useSelector((state: AppStore) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts({ limit, page, search }) as any);
      if (success) {
          dispatch(resetPosts() as any);
      }
  }, [dispatch, success, limit, page, search]);
  
  return (
    <div>
      <HeaderPage title="Posts">
        <Breadcrumbs items={["Realty", "Posts"]} />
      </HeaderPage>
      <div className={styles.header_page}>
        <Field>
          <Input type="Search" placeholder="Search posts" />
        </Field>
        <Link to="/posts/create">Add Post</Link>
      </div>
      {result.count > 0? (
        <Table  
        count={result.count}
        data={result.items}
        setLimit={setLimit}
        limit={limit}
        setPage={setPage}
        headers={['Title', 'Category', 'Description']}
        deleteItem={() => {}}
        setItemSelected={() => {}}
        />
      ): (
        <EmptyTable title='Posts' url='/posts/create'  />
      )}
      
    </div>
  );
};

export default Posts;
