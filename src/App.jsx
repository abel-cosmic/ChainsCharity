import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="donate" element={<Donate />} />
      {/*
       * this component will be rendered
       * when  the link is redirected to a none existing component
       */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
