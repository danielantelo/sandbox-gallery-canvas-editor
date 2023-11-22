import { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading";
import { Layout } from "./components/Layout";

const Gallery = lazy(() => import("./pages/Gallery"));
const Editor = lazy(() => import("./pages/Editor"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/edit/:imageId" element={<Editor />} />
          <Route path="/page/:page" element={<Gallery />} />
          <Route path="/" element={<Gallery />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
