import { cardProductType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface setQtyProps {
  cartCounter?: boolean;
  cartProduct: cardProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyle = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<setQtyProps> = ({
  cartProduct,
  cartCounter,
  handleQtyDecrease,
  handleQtyIncrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyle} onClick={handleQtyDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
