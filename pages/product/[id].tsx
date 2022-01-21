import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import { productProp, formatedProductInterface } from '../../interfaces/';
import { useCart } from '../../hooks/useCart';

import { Product } from '../../components/Product';
import { AmountControl } from '../../components/Product/AmountControl';
import { BuyContainer } from '../../components/Product/BuyButtonContainer';
import { Share } from '../../components/Product/ShareButton';
import { loadFormatedProduct } from '../../utils';
import { ProductImage } from '../../components/Product/ProductImage';

export default function Details({ product }: productProp) {
	const { cart } = useCart();

	const [ formatedProduct, setFormatedProduct ] = useState<formatedProductInterface>(
		loadFormatedProduct({ product, cart })
	);

	useEffect(
		() => {
			setFormatedProduct(loadFormatedProduct({ product, cart }));
		},
		[ product, cart ]
	);

	return (
		<div className="w-full flex flex-col">
			<div className='flex flex-col w-fit'>
			<ProductImage product={formatedProduct} styles="h-64 w-72 rounded-md" />
			<div className='flex w-full justify-end'>
			<Share product={product}/>
			</div>
			</div>
			<Product product={product} />
			<AmountControl product={product} min={0} />
			<div>
				<BuyContainer total={formatedProduct.total} text="Buy" />
			</div>
		</div>
	);
}

export const getServerSideProps: GetStaticProps = async (context) => {
	const id = context.params.id;
	const response = await fetch(`${process.env.API_URL}/${id}`);
	const product = await response.json();

	return {
		props: {
			product
		}
	};
};
