import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading";

const Gallery = lazy(() => import("./pages/Gallery"));
const Editor = lazy(() => import("./pages/Editor"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/edit/:imageId" element={<Editor />} />
        <Route path="/page/:page" element={<Gallery />} />
        <Route path="/" element={<Gallery />} />
      </Routes>
    </Suspense>
  );
}

export default App;
