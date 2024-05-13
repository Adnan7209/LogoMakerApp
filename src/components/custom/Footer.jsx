import React from 'react'
import logo from '@/assets/logo1.png'

const Footer = () => {
  return (
    <div className='h-[40px] bg-[#106ebe] gap-1 text-white flex items-center justify-center mt-[30px]'>
      <img src={logo} alt='LogoExpress' width={32}  />
      <span> LogoExpress</span>
    </div>
  )
}

export default Footer