import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import ScrollTop from "../UI/scroll-top/scroll-top";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollTop />
    </Layout>
  );
}

export default MyApp;
