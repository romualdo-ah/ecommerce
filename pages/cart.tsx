import React, { useEffect ,useState} from 'react';
import Link from 'next/link';

import {handleDelete,formatImageURL } from '../utils';

import { ImBin2 } from 'react-icons/im';
import { productInterface } from '../interfaces/';
import { useCart } from '../hooks/useCart';

import { BuyContainer } from '../components/Product/BuyButtonContainer';
import { ProductCardCart } from '../components/Product/ProductCardCart';

export default function Cartpage() {

	const { cart, products,clearCart } = useCart();
	const [ saved_products, setSavedProducts ] = useState<productInterface[]>([]);
	const [ total, setTotal ] = useState<number>(0);

	useEffect(
		() => {
			const loadProducts = async () => {
			let subtotal = 0;
			//get all the products in the cart and add the amount
			if(products){
			const cart_products = cart.flatMap((item) => {
				const product = products.find((product) => product.id === item.productId);
				subtotal += product.price * item.amount;
				if (product) {
					return {
						...product,
						image: formatImageURL(product.image),
						amount: item.amount
					};
				}
				return null;
			});
			setSavedProducts(cart_products);
			setTotal(() => +subtotal.toFixed(2));
			};
		};
			loadProducts();
		},
		[ cart, products ]
	);

	if(products&&products.length === 0){
		return <div>Loading...</div>
	}

	if(products&&cart.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center h-screen w-full">
				<h1 className="text-3xl text-gray-600">Cart is empty</h1>
				<Link href='/home'>
				<a className='mt-4 animate-pulse bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full'>
				Let&apos;s Back to Catalog?
				</a>
				</Link>
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen w-full mx-1/5">
			<div className="flex flex-row justify-between items-center mb-5">
				<h1 className="text-5xl">Cart</h1>
				{saved_products.length > 0 && (
					<button
					className="flex flex-row items-center bg-white p-2 rounded-md text-red-300 text-sm"
					onClick={()=>handleDelete({handler:clearCart,message:'Cart has been cleaned.'})}
					>
					<span className="mr-5">remove all</span>

					<ImBin2 className="w-4 h-4" />
				</button>
				)}
			</div>

			<div>{saved_products&&saved_products.map((product) => <ProductCardCart product={product} key={product.id} />)}</div>

			{cart.length > 0 ? (
				<div onClick={clearCart}>
				<BuyContainer total={total} text='Buy all'/>
				</div>
				
			) : null}
		</div>
	);
}
