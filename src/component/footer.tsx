import React from 'react'
import saltLogo from "../assets/salt-logo.svg"
import logoFooter from '../assets/logoNavbar/logoKiniCoffee.png'

const Footer = () => {
  return (
    <>
        <footer className='h-36 bg-[#f6f6f6] mt-8 '>
            <div className='flex justify-between items-center p-4'>
                <img src={logoFooter} alt="kini-kopi" className='w-[74px] mt-5 md:mt-2 h-[28px] md:w-[118px] md:h-[46px] lg:w-[178px] lg:h-[auto]'/>
                <div className='md:mt-3'>
                    <span className='text-[10px]'>Collaboration with:</span>
                    <div className='flex justify-center items-center'>
                    <img src={saltLogo} alt="SALT ACADEMY" className='w-[42px] h-[30px] md:w-[52px] md:h-[40px]'/>
                    <span className='text-xs md:text-sm'>SALT ACADEMY</span>
                    </div>
                </div>
            </div>
            <span className='flex justify-center md:-mt-16 text-sm md:text-md lg:text-lg'>Copyright©Kini Kopi 2023</span>
        </footer>
    </>
  )
}

export default Footer