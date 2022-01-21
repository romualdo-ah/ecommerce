import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { handleDelete } from '../../../utils';
import { IoMdClose } from 'react-icons/io';
import { AmountControl } from '../AmountControl';
import { useCart } from '../../../hooks/useCart';
import { productProp } from '../../../interfaces';
import { formatImageURL } from '../../../utils';
import { ProductImage } from '../ProductImage';

export function ProductCardCart({ product }: productProp) {
	const { removeProduct } = useCart();
	const [ formatedProduct, setFormatedProduct ] = useState({
		...product,
		image: formatImageURL(product.image),
		total: (product.amount * product.price).toFixed(2)
	});

	useEffect(
		() => {
			setFormatedProduct({
				...product,
				image: formatImageURL(product.image),
				total: (product.amount * product.price).toFixed(2)
			});
		},
		[ product ]
	);

	return (
		<div className="flex flex-row justify-start w-full mb-3 relative h-32 rounded-md">
			<Link href="/product/[id]" as={`/product/${product.id}`}>
				<div className="max-h-64 max-w-64 bg-gray-300 h-32 w-48">
					{/* passing cart as classname couse the style wanted is on ../../../styles/Cart.modules.css */}
					<ProductImage product={product} styles={'rounded-l-md h-full'}/>
				</div>
			</Link>
			<div className="flex flex-col w-full bg-white pl-3 rounded-r-md pt-2">
				<div className="flex flex-row justify-between">
					<Link href="/product/[id]" as={`/product/${product.id}`}>
						<a>
							<p className="w-full text-gray-600 text-sm line-clamp-1 hover:text-gray-400 transition-colors duration-300">{product.name}</p>
						</a>
					</Link>
				</div>
				<p className="text-lg">R$ {product.price}</p>

				<div className="flex">
					<AmountControl product={product} min={1} />
				</div>
				<p className="absolute bottom-2 bottom-2 text-gray-700 text-xs">
					<span className="text-gray-600 mr-1">Total:</span> R$ {formatedProduct.total}
				</p>
				<button className="absolute top-2 right-2" onClick={() => handleDelete({handler:()=>removeProduct(formatedProduct.id),message:"Product has been deleted!"})}>
					<IoMdClose className="w-4 h-4 text-gray-600" />
				</button>
			</div>
		</div>
	);
}
