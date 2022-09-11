import Image from "next/image";
interface props {
  src: any | "IntrinsicAttributes";
  title: string;
  items: number;
}

function Item({ src, title, items }: props): JSX.Element {
  return (
    <div className="space-y-1">
      <Image className="mt-1" src={src} width={100} height={100} layout={'intrinsic'}/>
      <div className="flex flex-col justify-center items-center">
        <p className="">{title}</p>
        <p>{items} items</p>
      </div>
    </div>
  );
}

export default Item;
