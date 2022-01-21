import {useState,useEffect} from 'react';
import { productProp } from '../../../interfaces';
import {useCart} from '../../../hooks/useCart';
import {RiShoppingCart2Fill,RiShoppingCart2Line} from 'react-icons/ri';

export const SaveOnCart=({product}:productProp)=>{

    const { cart, removeProduct, addProduct } = useCart();
	const [ liked, setLiked ] = useState(false);
	const [animated,setAnimated]=useState(false);

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
			handleAnimation();
			setLiked(true);
		}
	};

	const handleAnimation = () => {
		setAnimated(true);
		console.log('animated');
		setTimeout(() => {
			setAnimated(false);
			console.log('animated off');
		}
		, 200);

	};


    return (
        <div
				onClick={handleToogleLike}
				className=" right-0 m-2 w-8 h-8 flex justify-center items-center self-end"
			>
				{liked ? (
					<RiShoppingCart2Fill className={`text-blue-300 w-5 h-5 ${animated && "text-blue-500"}`} />
				) : (
					<RiShoppingCart2Line  className={`text-gray-400 w-5 h-5 focus:pointer-events-auto `} />
				)}
			</div>
    )
    
}