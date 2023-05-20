import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Loader } from "./components";
import { PrivateRoutes, PublicRoutes } from "./constant-definitions";
import NotFound from "./screens/NotFount";
import Properties from "./screens/Properties";
import CreatePropety from "./screens/Properties/Create";
import Posts from "./screens/Posts";
import CreatePost from "./screens/Posts/Create";
import Home from "./screens/Home";
import Signin from "./screens/Signin";

const Application = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
          <Routes>
            <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
            <Route path={PrivateRoutes.PROPERTIES} element={<Properties />} />
            <Route path={PrivateRoutes.POSTS} element={<Posts />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route
              path={PrivateRoutes.PROPERTIES_CREATE}
              element={<CreatePropety />}
            />   
            <Route
              path={PrivateRoutes.PROPERTIES_EDIT}
              element={<CreatePropety />}
            />
            <Route path={PrivateRoutes.POSTS_CREATE} element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
