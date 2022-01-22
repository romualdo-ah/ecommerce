import React, { useEffect, useState } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
export function GoToTopButton() {
	const [ isVisible, setIsVisible ] = useState(false);
	//create a go to top button

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const toggleVisibility = () => {

        window.pageYOffset > 300?
        setIsVisible(true):
        setIsVisible(false)

	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	//show the button only when the user scrolls down
	if (isVisible) {
		return (
			<div className="fixed bottom-4 right-3">
				<button className='rounded-full bg-gray-300 hover:scale-125 drop-shadow-sm transition-all p-2 text-gray-500' onClick={goToTop}>
                    <AiOutlineArrowUp className='text-1xl'/>
                </button>
			</div>
		);
	}
    return null;
}
