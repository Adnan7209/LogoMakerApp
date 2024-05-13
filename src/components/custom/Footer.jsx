import React from 'react'
import logo from '@/assets/logo1.png'

const Footer = () => {
  return (
    <div className='h-[40px] bg-[#106ebe] gap-1 text-white flex items-center justify-between px-5 md:px-[100px] mt-[0px] overflow-x-hidden'>
      <div className='flex items-center justify-center gap-1'>
      <img src={logo} alt='LogoExpress' width={32}  />
      <span> LogoExpress</span>
      </div>
      <p>All Rights Reserved 2024.</p>
    </div>
  )
}

export default Footer