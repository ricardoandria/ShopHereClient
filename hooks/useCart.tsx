import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { cardProductType } from "@/app/product/[productId]/ProductDetails";

type CartContextType = {
  cartTotalAmount: number;
  cartTotalQty: number;
  cartProducts: cardProductType[] | null;
  handleAddProductToCart: (product: cardProductType) => void;
  handleRemoveProductCart: (product: cardProductType) => void;
  handleCartQtyIncrease: (product: cardProductType) => void;
  handleCartQtyDecrease: (product: cardProductType) => void;
  handleClear: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider: React.FC<Props> = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<cardProductType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("TIvidyCartItem");
    const cProducts: cardProductType[] | null = JSON.parse(cartItems);

    setCartProducts(cProducts);
  }, []);

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          { total: 0, qty: 0 }
        );
        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };

    getTotal();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: cardProductType) => {
    setCartProducts((prev) => {
      let updateCart;

      if (prev) {
        updateCart = [...prev, product];
      } else {
        updateCart = [product];
      }
      toast.success("Product added to Cart");
      localStorage.setItem("TIvidyCartItem", JSON.stringify(updateCart));
      return updateCart;
    });
  }, []);

  const handleRemoveProductCart = useCallback(
    (product: cardProductType) => {
      if (cartProducts) {
        const filteredProduct = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProduct);
        toast.success("Product removed");
        localStorage.setItem("TIvidyCartItem", JSON.stringify(filteredProduct));
      }
    },

    [cartProducts]
  );

  const handleClear = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("TIvidyCartItem", JSON.stringify(null));
  }, [cartProducts]);

  const handleCartQtyIncrease = useCallback(
    (product: cardProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return toast.error("Maximum reached");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity =
            updatedCart[existingIndex].quantity + 1;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("TIvidyCartItem", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: cardProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Minimum reached");
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity =
            updatedCart[existingIndex].quantity - 1;
        }

        setCartProducts(updatedCart);
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClear,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
