import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'


const GetStarted = () => (
  
  <a href="http://127.0.0.1:5500/src/components/Shop.html"><div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient"><a href="http://127.0.0.1:5500/src/components/Shop.html">Get</a></span>
          </p>
          
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient"><a href="http://127.0.0.1:5500/src/components/Shop.html">Started</a></span>
          </p>
      </div>
    </div>
    </a>
)


export default GetStarted