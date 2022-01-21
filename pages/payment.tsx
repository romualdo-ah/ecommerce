import React from 'react';
import Link from 'next/link';
import {FaGithubAlt} from 'react-icons/fa';

export default function Payment() {
  return <main className='flex justify-center flex-col items-center w-full'>
    <h1 className='text-lg text-4xl'>🥳 Contragulations!</h1>
    <div>
    <p className='flex flex-col justify-center items-center mt-4'>
        <span>You have successfully completed your order.</span>
    <Link href='/home'>
        <a className='my-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full w-fit'>
            Let&apos;s Make another present?
        </a>
    </Link>
    <span>&amp;&amp;</span>
    <div className='flex justify-start'>

    <a href='https://www.github.com/romualdo-ah' className='flex flex-row items-center mt-8 cursor-pointer'>
        <FaGithubAlt className='text-gray-600 h-6 w-6 animate-bounce transition-all mr-1 '/> Visit my Github, I&apos;m <span className='underline underline-offset-2 ml-1'>Romualdo</span>
    </a>
    </div>
    </p>

    </div>
  </main>;
}
