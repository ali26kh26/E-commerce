import product from "./product";

interface cart_product extends product {
  quantity: number;
}

export default cart_product;
