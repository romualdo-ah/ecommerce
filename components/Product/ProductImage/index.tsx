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
			{/* adding LazyLoadImage component to armonize the loading of images,
			effect: 'blur' is the effect that will be applied to the image,
			placeholderSrc: '/default-image.jpg' is the placeholder image that will be shown while the image is loading 
			threshold: is the distance from the bottom of the screen that the image will be loaded
			*/}
			<LazyLoadImage src={product.image} alt={product.name} effect='blur' placeholderSrc="/default-image.jpg" threshold="300"/>
		</div>
	);
}
