import React from 'react'
import Image from 'next/image';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div classname='w-full lg:h-screen'>
      <div classname='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p classname='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 classname='py-4'>Get In Touch</h2>

        <div classname='grid lg:grid-cols-5 gap-8'>
{/* left */}
<div classname='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div classname='lg:p-4 h-full'>
      <div>
        <Image classname='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/" />
      </div>

    </div>
</div>
{/* right */}    
        </div>  
      </div>
    </div>
  );
}

export default Contact