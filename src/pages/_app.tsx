import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.scss";
import "~/styles/Calendar.scss";
import Navbar from "~/components/Navigation/Navbar/Navbar";
import Sidebar from "~/components/Navigation/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Footer from "~/components/Navigation/Footer/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if(typeof window !== "undefined" && window.screen.width < 900) {
      setIsMobile(true);
  }
  },[]);
  
  return (
    <>
    {isMobile ? <Sidebar></Sidebar> : <Navbar></Navbar> }
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default api.withTRPC(MyApp);
