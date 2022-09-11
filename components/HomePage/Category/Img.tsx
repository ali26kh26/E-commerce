import Image from "next/future/image";

function Img():JSX.Element {

  return (
      <Image className="aspect-auto" priority src={'/assets/category-banner.png'} alt={""} width={500} height={600}/>
  )

}

export default Img;