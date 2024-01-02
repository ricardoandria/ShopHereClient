import { useEffect, useState } from "react";

const FormatPrice = ({ initialAmount }: any) => {
  const [formattedPrice, setFormattedPrice] = useState(initialAmount);

  useEffect(() => {
    const formatted = new Intl.NumberFormat("mg-MG", {
      style: "currency",
      currency: "MGA",
    }).format(initialAmount);

    setFormattedPrice(formatted);
  }, [initialAmount]);

  return <div dangerouslySetInnerHTML={{ __html: formattedPrice }} />;
};

export default FormatPrice;
