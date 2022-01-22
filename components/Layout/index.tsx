import React ,{ReactNode}from 'react'
import Navbar from '../Navbar'
import {GoToTopButton} from '../GoToTopButton';
interface LayoutProps  {
    children: ReactNode
}

export default function Layout({children}:LayoutProps) {

    
    
    return (
        <>
            <Navbar/>
            <main className="flex w-full min-h-screen px-5 md:px-20 font-montserrat py-20 pb-24 bg-gray-200">
                {children}   
            </main>
           <GoToTopButton/>
        </>
    )
}
