import { createContext, useContext, useState,ReactNode,useEffect} from "react";
import { toast } from "react-toastify";
import { CartContextData, productInterface, ProductIdWithAmount} from "../interfaces";
import { useProducts } from "./useProducts";
import {LoadProducts} from '../services';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps):JSX.Element {
  
  const [cart, setCart] = useState<ProductIdWithAmount[]>([]);
  const { data: products } = useProducts<productInterface[]>(process.env.API_URL);

  useEffect(() => {

    const loadCart=() => {
      const storedCart = localStorage.getItem("@ecommerce:cart");
  
      if (storedCart) {
        return JSON.parse(storedCart);
      }
  
      return [];
    }

    const storedCart = loadCart();
    setCart(storedCart);
  }, []);


  const addProduct = async (productId: number) => {
    try {
      //if productid is on products add to cart 
      if(products){
        const product = products.find((product) => product.id === productId);
        if(product){
          const newCart = [...cart, { productId, amount: 1 }];
          setCart(newCart);
          localStorage.setItem("@ecommerce:cart", JSON.stringify(newCart));
          toast.success("Product added to cart successfully");
        }
      }
      
    } catch {
      toast.error("Product not found:(");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const newCart = cart.filter((cart_product) => cart_product.productId !== productId);
      if (newCart.length === cart.length) throw Error;
      setCart(newCart);
      localStorage.setItem("@ecommerce:cart", JSON.stringify(newCart));

    } catch {
      toast.error("Something went wrong(");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: ProductIdWithAmount) => {
    try {
      //check if amount is NaN, then addProduct with id productId
      if(isNaN(amount)){
        addProduct(productId);
        return;
      }
      
      //check if amount is 0, then removeProduct with id productId
      if(amount === 0){
        removeProduct(productId);
        return;
      }
      
	    const products = await LoadProducts();

      const stock = products.find((product) => product.id === productId).stock;

      if (amount > stock.amount) {
        throw toast.error("Quantity not available");
        return;
      }

      let newCart = [...cart].filter((product) => {
        if (product.productId === productId) product.amount = amount;
        return product;
      });

      setCart(newCart);
      localStorage.setItem("@ecommerce:cart", JSON.stringify(newCart));
    } catch {
      toast.error("Something went wrong :(");
    }
  };

  const clearCart = () => {
    localStorage.removeItem("@ecommerce:cart");
    setCart([]);
  };

    
  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        clearCart,
        addProduct,
        removeProduct,
        updateProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart=():CartContextData=>{
    return useContext(CartContext);
}