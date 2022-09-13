import Image from "next/image";


function Img({src}:{src: string}):JSX.Element {

  return (
    <div className=" border-2 border-solid">
      <Image src={src} width={300} height={300} />
    </div>
  )

}

export default Img;