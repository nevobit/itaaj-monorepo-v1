import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Loader } from "./components";
import { PrivateRoutes } from "./constant-definitions";
import NotFound from "./screens/NotFount";
import Properties from "./screens/Properties";
import CreatePropety from "./screens/Properties/Create";

const Application = () => {

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Layout>
        
      <Routes>
        <Route path={PrivateRoutes.PROPERTIES} element={<Properties />} />
        <Route path={PrivateRoutes.PROPERTIES_CREATE} element={<CreatePropety />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
      
      </BrowserRouter>
    </Suspense>
  )
}

export default Application;
