import React from 'react';
import Link from 'next/link';
import { productProp } from '../../../interfaces';
import { Product } from '../index';
import { SaveOnCart } from '../SaveOnCartButton';
import {Share} from '../ShareButton';
import { ProductImage } from '../ProductImage';

export function ProductCard({ product }: productProp) {
	
	return (
		<div className="flex flex-col rounded-sm bg-gray-100 justify-between hover:drop-shadow-2xl transition-all ease-out duration-1000 cursor-pointer relative">
			<div className=" h-72 w-80 z-10">
				{/* rounded-t-md is a custom css classname found at styles/Lazy.module.css  */}
			<ProductImage product={product} styles='h-full rounded-t-md'/>
			<div className='flex flex-row items-center w-full justify-end'>
			<Share product={product}/>
			<SaveOnCart product={product} />
			</div>
			</div>
			
			<Product product={product} />
			<Link href={`/product/${product.id}`}>
				<a>
					<div className="m-1 p-2 bg-gray-700 text-gray-200 rounded-md text-center">See more</div>
				</a>
			</Link>
		</div>
	);
}
