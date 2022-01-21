import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {BsCart3} from 'react-icons/bs';
import {useCart} from '../../hooks/useCart';
export default function Navbar() {

	const {cart} = useCart();
	
	const [productCounter, setProductCounter] = React.useState(0);

	useEffect(
		() => {
			const numberOfProducts = cart.length;
			setProductCounter(numberOfProducts);
		},[cart]
	);
			

	const router = useRouter();
	//set the active class on the navbar
	const activeClass = (path: string) => {
		if (router.pathname === path) {
			return 'decoration-blue-300 hover:decoration-gray-300 underline underline-offset-2';
		}
		return '';
	};

	return (
		<nav className="flex justify-between content-center align-middle p-3 bg-white drop-shadow-md z-50 fixed top-0 w-full bg-opacity-80 backdrop-blur">
             
                <Link href="/home">
                    <a className={`${activeClass('/home')} text-black-500 hover:text-black-400`}>
                        Home
                    </a>
                </Link>
				
                <Link href="/cart">
                    <a className={`${activeClass('/cart')} hover:text-gray-400 content-center justify-center pt-1 pr-6 relative`}>
                        <BsCart3 className="w-5 h-5" />
						<div className="text-gray-700 text-sm absolute -top-2 -right-1 text-gray-100 rounded-full flex justify-center items-center bg-slate-700 w-5 h-6 px-3">
						<span className="text-xs">{productCounter}</span>
						</div>
                    </a>
                </Link>
            
		</nav>
	);
}
