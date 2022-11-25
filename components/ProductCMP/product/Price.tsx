function Price({
  value,
  discount,
}: {
  value: number;
  discount?: number;
}): JSX.Element {
  function calcDiscountPrice(price: number, discount: number) {
    return (price - price * (discount / 100)).toFixed(2);
  }
  return (
    <div className="flex font-bold pt-1 text-lg">
      {discount && <p>${calcDiscountPrice(value, discount)}</p>}
      <p className={`ml-2 ` + `${discount ? "line-through" : ""}`}>
        ${value.toFixed(2)}
      </p>
    </div>
  );
}

export default Price;
