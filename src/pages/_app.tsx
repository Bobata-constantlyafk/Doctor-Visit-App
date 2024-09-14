import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.scss";
import "~/styles/Calendar.scss";
import Navbar from "~/components/Navigation/Navbar/Navbar";
import Sidebar from "~/components/Navigation/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Footer from "~/components/Navigation/Footer/Footer";
import FooterMobile from "~/components/Navigation/FooterMobile/FooterMobile";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.screen.width < 900) {
      setIsMobile(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isMobile ? <Sidebar></Sidebar> : <Navbar></Navbar>}
      <Component {...pageProps} />
      {isMobile ? <FooterMobile /> : <Footer />}
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default api.withTRPC(MyApp);
