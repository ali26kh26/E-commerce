import { useRouter } from "next/router";

const GoToProduct = ({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer   flex justify-center align-baseline"
      onClick={() => {
        router.push(`/collections/${slug}`);
      }}
    >
      {children}
    </div>
  );
};

export default GoToProduct;
