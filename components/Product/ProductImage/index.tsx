import React from 'react';
import { productInterface } from '../../../interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProductImageProps {
	styles?: string;
	product: productInterface;
}

export function ProductImage({ product, styles }: ProductImageProps) {
	return (
		<div className={`${styles} relative`}>
			<LazyLoadImage src={product.image} alt={product.name} effect='blur' placeholderSrc="/default-image.jpg"/>
		</div>
	);
}
