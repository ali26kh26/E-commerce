import Head from "next/head";
import { default as Cart } from "../../components/cart-page/cart-page";
const CartPage = () => {
  return (
    <>
      <Head>
        <title>Your Shopping cart - grocery-store</title>
        <meta name="description" content="your shopping cart" />
      </Head>
      <Cart />;
    </>
  );
};

export default CartPage;
