type product = {
  name: string;
  price: number;
  image: string;
  slug: string;
  in_stock: boolean;
  size: Array<string>;
  discount?: number;
};

export default product;
