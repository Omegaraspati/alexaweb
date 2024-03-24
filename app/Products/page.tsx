import React from 'react'
import NavbarProduct from '../components/NavbarProduct'
import Image from 'next/image'
import background from '../../public/images/bannerProduct1.png'
import OurProduct from '../components/OurProduct'

const page = () => {
  return (
    <div>
      <NavbarProduct />
      <div className='absolute -z-10 w-full px-20 '>
        <Image src={background} className='object-cover object-center w-full shadow-dark-3 ' alt='bg-image' width={1000} height={1000} />
        <OurProduct />
      </div>
  
  

</div>
    
  )
}

export default page