// export const formatPrice = (amount: number) => {
//   return new Intl.NumberFormat("mg-MG", {
//     style: "currency",
//     currency: "MGA",
//   }).format(amount);
// };
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const FormatPrice = ({ initialAmount }: any) => {
  const [formattedPrice, setFormattedPrice] = useState(initialAmount);

  useEffect(() => {
    // Update the formatted price on the client side
    const formatted = new Intl.NumberFormat("mg-MG", {
      style: "currency",
      currency: "MGA",
    }).format(initialAmount);

    setFormattedPrice(formatted);
  }, [initialAmount]);

  return <div dangerouslySetInnerHTML={{ __html: formattedPrice }} />;
};

export default FormatPrice;
