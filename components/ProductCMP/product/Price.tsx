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
    <div className="flex justify-between font-bold pt-1 ">
      {discount && <p>${calcDiscountPrice(value, discount)}</p>}
      <p
        className={`ml-2 ` + `${discount ? "line-through text-gray-600" : ""}`}
      >
        ${value.toFixed(2)}
      </p>
    </div>
  );
}

export default Price;
