import Item from "./Item";

function ItemsSmallScreen() {
  return (
    <>
      <div className="mt-4 flex justify-evenly sm:hidden">
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
      </div>
      <div className="mt-4 flex justify-evenly sm:hidden">
        <Item items={11} title={"Cow Milk"} src={"/assets/items/milk.webp"} />
        <Item
          items={16}
          title={"Sea & Fish"}
          src={"/assets/items/sea&fish.webp"}
        />
      </div>
      <div className="mt-4 flex justify-evenly sm:hidden">
        <Item items={16} title={"Fresh Meat"} src={"/assets/items/meat.webp"} />
        <Item
          items={16}
          title={"Ice Cream"}
          src={"/assets/items/icecream.webp"}
        />
      </div>
    </>
  );
}

export default ItemsSmallScreen;
