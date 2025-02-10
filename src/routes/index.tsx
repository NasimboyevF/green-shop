import { Routes, Route, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import MySwiper from "../components/Swiper";
import Home from "../pages/home";
import About from "../pages/about";
import { ReactNode } from "react";
import Bascets from "../pages/bascets";
import Checkout from "../pages/checkout";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const shouldShowSwiper = location.pathname === "/";

  return (
    <>
      <Navbar />
      {shouldShowSwiper && <MySwiper />}
      {children} 
    </>
  );
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about/:id" element={<Layout><About /></Layout>} />
      <Route path="/bascets" element={<Layout><Bascets/></Layout>} />
      <Route path="/checkout" element={<Layout><Checkout/> </Layout>}/>
    </Routes>
  );
};
