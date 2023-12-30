"use client";

import {
  cardProductType,
  selectedImgType,
} from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
  images: selectedImgType[];
  cartProduct: cardProductType;
  handleColorSelect: (value: selectedImgType) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <span className="font-semibold">COLOR:</span>
      <div>
        {images.map((image) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default SetColor;
