import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import ScrollTop from "../UI/scroll-top/scroll-top";
import { Provider } from "react-redux";
import { store } from "../store/store";
import CartModal from "../components/cart-modal/cart-modal";
import SearchBar from "../components/search-bar/search-bar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <CartModal />
        <SearchBar />
        <Component {...pageProps} />
        <ScrollTop />
      </Layout>
    </Provider>
  );
}

export default MyApp;
