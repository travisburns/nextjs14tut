"use client";

import Image from 'next/image';
import me from '../../public/me.jpg';


export default function Home() {
  
  return (
    <div>
      <div className=''>
      <Image quality={100} src={me}  alt="?" />
      </div>
      
    </div>

   
  )
}
