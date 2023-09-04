import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.scss";
import "~/styles/Calendar.scss";
import Navbar from "~/components/Navigation/Navbar/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />;
    </>
  );
};

export default api.withTRPC(MyApp);
