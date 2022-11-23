import Image from "next/image";

const ProductImage = ({ path }: { path: string }) => {
  return (
    <div style={{ width: "100%" }}>
      <Image
        src={path}
        layout="responsive"
        quality={100}
        width={400}
        height={400}
      />
    </div>
  );
};

export default ProductImage;
