import { DeleteProductProps, FormatedProductProps } from './../interfaces/index';
import Swal from 'sweetalert2';

export const formatedPrice = (price:number) => {
    return ((price).toFixed(2))
}

export const formatImageURL=(image_url:string)=>{
    //due to the fact that the original image url is not responding to the request, we need to use another url
    //replace .com with .com.br
    if(!image_url.includes(".com.br")){
    const image_with_br = image_url.replace('.com', '.com.br');
    return image_with_br;
    }
    return image_url;
}

export const loadFormatedProduct = ({product,cart}:FormatedProductProps) => {
    //return the product with the total price and the amount of products in the cart, and the image url with the .com.br
    let cart_product=null
    if(cart){
    cart_product = cart.find((cart_product) => cart_product.productId === product.id);
    }
    return {...product,total:(cart_product?.amount||0)*product.price,amount:cart_product?.amount||0,image:formatImageURL(product.image)}
}



export const handleDelete=({handler,message}:DeleteProductProps)=> {
// Open a popup to confirm the deletion
  const dialog = Swal.mixin({
    customClass: {
      confirmButton:
        'text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-xs font-light ml-2',
      cancelButton:
        'text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-semibold ml-2'
    },
    buttonsStyling: false
  });

  dialog
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',

      showCancelButton: true,
      confirmButtonColor: '#aaa',
      cancelButtonColor: '#444',
      focusCancel: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Undo'
    })
    .then((result) => {
      if (result.value) {
        handler();
        Swal.fire('Deleted:(', message);
      }
    });
}
