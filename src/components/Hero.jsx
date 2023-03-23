import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import {GetStarted} from './index'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discont" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 uppercase`}>   
            <span className="text-white">20%</span> Discount For {" "} 
            <span className="text-white">First 100</span> Customers
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The First  <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">WEB 3.0</span> {" "} 

          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted/>
          </div>
        </div>
        <h1  className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> Shopping Experience</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to Web 3.0 shopping!
        Our blockchain-based platform offers secure transactions, decentralized marketplaces, AI-powered shopping assistants, and trusted ratings.
        </p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero