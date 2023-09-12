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
import Proposals from "./screens/Proposals";
import Developments from "./screens/Developments";
import CreateDevelopment from "./screens/Developments/Create";
import Property from "./screens/Property";
import Leads from "./screens/Leads";

const Application = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
          <Routes>
            <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
            <Route path={PrivateRoutes.PROPERTIES} element={<Properties />} />
            <Route path={PrivateRoutes.DEVELOPMENTS} element={<Developments />} />
            <Route path={PrivateRoutes.POSTS} element={<Posts />} />
            <Route path={PrivateRoutes.PROPOSALS} element={<Proposals />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path='leads' element={<Leads />} />

            <Route element={<Layout />}>
              <Route path="/prop" element={<Property />} />
            </Route>
            <Route
              path={PrivateRoutes.PROPERTIES_CREATE}
              element={<CreatePropety />}
            />   
             <Route
              path={PrivateRoutes.DEVELOPMENTS_CREATE}
              element={<CreateDevelopment />}
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
