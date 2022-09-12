interface props {
  svg: JSX.Element;
  title: String;
}

function Item({ svg, title }: props) {
  return (
    <div className="flex items-center space-x-2 cursor-default transition ease-in-out hover:scale-110">
      {svg}
      <p className="text-lg font-medium sm:font-bold sm:text-xl">{title}</p>
    </div>
  );
}

export default Item;
