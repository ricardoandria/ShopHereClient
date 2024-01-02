"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span className=" absolute top-[-10px] right-[-10px] bg-[#00ABE4] text-white h-6 w-6 text-center rounded-full group-hover:animate-bounce">
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
