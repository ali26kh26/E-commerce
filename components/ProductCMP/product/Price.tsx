import { calcDiscountPrice } from "../../../helpers/product-client";

function Price({
  value,
  discount,
}: {
  value: number;
  discount?: number;
}): JSX.Element {
  return (
    <div className="flex justify-between font-bold pt-1 ">
      <p className="m-auto">
        {discount && (
          <span className="mr-3">${calcDiscountPrice(value, discount)}</span>
        )}
        <span className={discount ? " line-through text-gray-600 " : ""}>
          ${value.toFixed(2)}
        </span>
      </p>
    </div>
  );
}

export default Price;
