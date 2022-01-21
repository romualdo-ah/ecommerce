import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
interface BuyContainerProps {
    total: number,
    text:string
}

import { formatedPrice } from '../../../utils'

export function BuyContainer({total,text}:BuyContainerProps) {
    const router= useRouter()
        
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white w-full p-1 h-fit flex flex-row items-center justify-around">
        <div className='self-start'>
        <span className="text-xl text-gray-800">total: </span>
        <span className="text-sm text-gray-600">R$ {formatedPrice(total)??'0.00'}</span>
        </div>
        <div className={`w-1/3 bottom-2 left-2 right-4 ${total==0?" bg-gray-400 ":"bg-gray-900 "} p-2 rounded-md text-gray-400 text-center`}>
            {

                total>0?(

                    router.pathname.includes('/product/') ?
                    (
                        <Link href="/cart">
                        <a className='cursor-pointer'>
                            <span className="text-xl text-gray-200">{text}</span>
                        </a>
                    </Link>
                ):
                (
                        <Link href={`/payment`}>
                        <a>
                            <span className="text-xl text-gray-200">{text}</span>
                        </a>
                        </Link>
                    
                )
                )
                :
                <span className="text-xl text-gray-300">{text}</span>
            }
        </div>
    </div>
    )
}
