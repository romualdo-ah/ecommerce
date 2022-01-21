import Head from 'next/head';
import {ProductCard} from '../components/Product/ProductCardCatalog';
import { ProductsProp } from '../interfaces';
import { loadFormatedProduct } from '../utils';

export default function Home({products}: ProductsProp) {
	
	return (
		<>
			<Head>
				<title>Ecommerce project</title>
				<meta name="description" content="Ecommerce project test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
				<div className="flex flex-col items-center">

				<div className='flex justify-center flex-wrap gap-6 items-center'>
				<h1 className="text-5xl mb-6 mt-3 font-montserrat font-bold self-start w-full">Products</h1>
					{products.map((product) => (
						<ProductCard product={product} key={product.id}/>
						))}
				</div>
				</div>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(process.env.API_URL)
	const products = await response.json()
	const formatedProducts = products.map(product=>loadFormatedProduct({product}))
	return {
		props: {
			products: formatedProducts
		},
	};
}