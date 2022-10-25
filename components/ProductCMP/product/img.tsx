import Image from "next/image";

function Img({ src }: { src: string }): JSX.Element {
  return (
    <div>
      <Image src={src} width={220} height={220} quality={100} />
    </div>
  );
}

export default Img;
