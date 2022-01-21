export interface productInterface{
    id: number;
    name: string;
    price: number;
    image: string;
    stock?: number;
    amount?: number;
    };

export interface productProp {
    product: productInterface;
    }

export interface ProductsProp {
    products: productInterface[]
    }

export interface ProductIdWithAmount {
    productId: number;
    amount: number;
    }

export interface DeleteProductProps {
    message: string,
    handler:(param?)=>void
    }

export interface CartContextData {
    cart: ProductIdWithAmount[];
    products: productInterface[];
    clearCart: () => void;
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: ProductIdWithAmount) => void;
      }

export interface formatedProductInterface extends productInterface {
    total: number;
    }

export interface FormatedProductProps{
        product:productInterface,
        cart?:ProductIdWithAmount[]
    }
    