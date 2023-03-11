import Image from "next/image";
interface props {
  src: any | "IntrinsicAttributes";
  title: string;
  items: number;
}

function Item({ src, title, items }: props): JSX.Element {
  return (
    <div className="space-y-1">
      <div className="cursor-pointer transition ease-in-out hover:scale-125 drop-shadow-lg">
        <Image
          alt={title}
          className=""
          src={src}
          width={100}
          height={100}
          layout={"intrinsic"}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-medium">{title}</p>
        <p className="font-light text-sm text-slate-500">{items} items</p>
      </div>
    </div>
  );
}

export default Item;
