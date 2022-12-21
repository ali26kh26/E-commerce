import Image from "next/image";
import GoToProduct from "../../ProductCMP/product/go-to-product/go-to-product";

const ProductImage = ({
  path,
  quickview,
  slug,
}: {
  path: string;
  quickview?: boolean;
  slug: string;
}) => {
  return (
    <div style={{ width: "100%" }}>
      {!quickview ? (
        <Image
          src={path}
          layout="responsive"
          quality={100}
          width={400}
          height={400}
        />
      ) : (
        <GoToProduct slug={slug}>
          <Image src={path} quality={100} width={250} height={250} />
        </GoToProduct>
      )}
    </div>
  );
};

export default ProductImage;
