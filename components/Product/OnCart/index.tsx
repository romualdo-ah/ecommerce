import {useState,useEffect} from 'react';
import { productProp } from '../../../interfaces';
import {useCart} from '../../../hooks/useCart';
import {RiShoppingCart2Fill,RiShoppingCart2Line} from 'react-icons/ri';

export const OnCart=({product}:productProp)=>{

    const { cart, removeProduct, addProduct } = useCart();
	const [ liked, setLiked ] = useState(false);


    useEffect(
		() => {
			const isSaved = cart.find((cart_product) => cart_product.productId == product.id);
			
			if (isSaved) {
				setLiked(true);
			}
		},
		[ cart, product.id ]
	);

	const handleToogleLike = () => {
		
		if (liked) {
			removeProduct(product.id);
			setLiked(false);
		} else {
			addProduct(product.id);
			setLiked(true);
		}
	};

    return (
        <div
				onClick={handleToogleLike}
				className=" right-0 m-2 w-8 h-8 flex justify-center items-center self-end"
			>
				{liked ? (
					<RiShoppingCart2Fill className=" text-gray-500 w-5 h-5" />
				) : (
					<RiShoppingCart2Line  className="text-gray-400 w-5 h-5 focus:pointer-events-auto" />
				)}
			</div>
    )
    
}