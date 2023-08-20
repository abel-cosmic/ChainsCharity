import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex flex-row items-center justify-center bg-primary bg-opacity-10 w-[100%] h-[100vh]">
          <motion.div
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <ScaleLoader
              color="#0D82BE"
              cssOverride={{}}
              height={80}
              loading
              margin={4}
              radius={20}
              speedMultiplier={0.8}
              width={10}
            />
          </motion.div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
