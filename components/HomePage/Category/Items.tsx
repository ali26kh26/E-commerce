import Item from "./Item";
import ItemsSmallScreen from "./itemsSmallScreen";

function Items(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-evenly  items-around">
      <div className="hidden  sm:flex justify-evenly mt-4">
        <Item
          items={16}
          title={"Vegetable"}
          src={"/assets/items/vegetable.webp"}
        />
        <Item
          items={16}
          title={"Fresh Fruits"}
          src={"/assets/items/fruits.webp"}
        />
        <Item items={11} title={"Cow Milk"} src={"/assets/items/milk.webp"} />
      </div>
      <div className="hidden  sm:flex justify-evenly mt-4">
        <Item
          items={16}
          title={"Sea & Fish"}
          src={"/assets/items/sea&fish.webp"}
        />
        <Item items={16} title={"Fresh Meat"} src={"/assets/items/meat.webp"} />
        <Item
          items={16}
          title={"Ice Cream"}
          src={"/assets/items/icecream.webp"}
        />
      </div>
      {/* Small screen*/}
      <ItemsSmallScreen />
    </div>
  );
}

export default Items;
