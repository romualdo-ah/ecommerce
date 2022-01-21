import React, { useEffect, useState } from 'react';
import { productInterface } from '../../../interfaces';
import { useCart } from '../../../hooks/useCart';
import { HiPlus, HiMinus } from 'react-icons/hi';
interface AmountControlProps {
	product: productInterface;
	min?: number;
}

export function AmountControl({ product,min }: AmountControlProps) {
	const { updateProductAmount, cart } = useCart();

	const [ formatedProduct, setFormatedProduct ] = useState({
		...product,
		total: (product.amount * product.price).toFixed(2)
	});

	useEffect(
		() => {
			//find product in cart with the id of product
			const productInCart = cart.find((item) => item.productId === product.id);
			if (productInCart) {
				setFormatedProduct({
					...product,
					total: (product.amount * product.price).toFixed(2),
					amount: productInCart.amount
				});
			} else {
				setFormatedProduct({ ...product, total: (product.amount * product.price).toFixed(2) });
			}
		},
		[ product, cart ]
	);

	const handleIncreaseAmount = (product: productInterface) => {
		const updatedProduct = { productId: product.id, amount: product.amount + 1 };

		updateProductAmount(updatedProduct);
	};

	const handleDecreaseAmount = (product: productInterface) => {
		if(product.amount > min){
		const updatedProduct = { productId: product.id, amount: product.amount - 1 };
		updateProductAmount(updatedProduct);
		}
	};
	return (
		<div className="flex flex-row ml-1 py-3 items-center">
			
			{formatedProduct.amount === undefined ? (
				<button className="h-5 w-5 text-gray-400">
					<HiMinus />
				</button>
			) : (

				<button className="h-5 w-5 text-gray-700" onClick={() => handleDecreaseAmount(formatedProduct)}>
					<HiMinus />
				</button>
			)}

			<p className="w-fit px-3 bg-gray-100 rounded mr-1 text-gray-700">
				x{formatedProduct.amount ? formatedProduct.amount : 0}
			</p>
			<button className="text-xl text-gray-700" onClick={() => handleIncreaseAmount(formatedProduct)}>
				<HiPlus />
			</button>
		</div>
	);
}
