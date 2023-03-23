import React from "react";

const Button = ({ styles }) => (    
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}  >
<a href="http://127.0.0.1:5500/src/components/Shop.html">Get Started</a>
</button>



);

export default Button;