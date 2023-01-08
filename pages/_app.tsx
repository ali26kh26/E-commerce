import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import ScrollTop from "../UI/scroll-top/scroll-top";
import { Provider } from "react-redux";
import { store } from "../store/store";
import CartModal from "../components/cart-modal/cart-modal";
import SearchBar from "../components/search-bar/search-bar";
import Head from "next/head";
import QuickviewModal from "../components/quick-view-modal/quick-view-modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>grocery-store</title>
        <meta
          name="description"
          content="an online shop for fresh groceries "
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <Layout>
          <CartModal />
          <QuickviewModal />
          <SearchBar />
          <Component {...pageProps} />
          <ScrollTop />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
