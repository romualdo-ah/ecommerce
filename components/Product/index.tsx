import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { productProp } from '../../interfaces';

/*
	This component is used to display the product common details
	like name and price
	if the current url is not the product page
	When the user clicks on the product name it should redirects to the product page with the product id,
	else stays on the current page
*/
export function Product({ product }: productProp) {
    const router = useRouter();
	

	return (
		<div>
			<div>
				<div className="flex flex-col justify-self-end items-baseline relative p-2">
					<div className="flex flex-row justify-between items-center w-auto">
						<p className="text-2xl mt-2 font-montserrat">R$ {product.price}</p>
					</div>

                    {
                        // if path is /product/:id disable the Link else enable it
                        router.pathname === `/product/${product.id}` ?
                        (
					<Link href={`/product/${product.id}`}>
                        <a className='cursor-pointer'>
                    		<p className=" w-full text-gray-800 mt-3">{product.name}</p>
                        </a>
                    </Link>
                        ):
                        <p className=" w-full text-gray-800 mt-3">{product.name}</p>
                    }
				</div>
			</div>
		</div>
	);
}
