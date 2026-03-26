import Layout from "@/layout/Layout";
import NotFound from "@/screens/NotFound";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("@/screens/Home"));
const Solutions = lazy(() => import("@/screens/Solutions"));
const Talents = lazy(() => import("@/screens/Talents"));
const About = lazy(() => import("@/screens/About"));
const Contact = lazy(() => import("@/screens/ContactUs"));

const LoadingFallback = () => (
  <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50">
    <div className="h-full bg-success animate-[loading_1s_ease-in-out_infinite]" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/solutions" element={<Solutions />} />
          <Route index path="/talent" element={<Talents />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/contact-us" element={<Contact />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
