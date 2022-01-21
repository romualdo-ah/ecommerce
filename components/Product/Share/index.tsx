import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import Swal from 'sweetalert2';
export function Share({product}) {

  const handleClick = (product) => {
    //copy to clipboard
    const text = `${product.name} - R$ ${product.price}`;
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `${product.name} - R$ ${product.price}`,
          url: `${process.env.NEXT_PUBLIC_URL}/product/${product.id}`,
        })
        .then(() => {
          console.log("Successfully shared!");
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else 
    Swal.fire
          ({
            title: 'Oops...🙄!',
            text: 'It seems you are not using a browser that supports sharing',
          })
  };

  return <>
      <FaTelegramPlane className='text-gray-500 w-5 h-5 m-3' onClick={()=>handleClick(product)}/>
  </>;
}
