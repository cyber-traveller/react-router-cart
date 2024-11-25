import React from "react";

function DiscountPrice({ price, discountPercentage ,totalItems}) {
  return <div className="shadow-md flex flex-col items-end justify-end p-2 gap-2">
    <span className="bg-red-500 text-white font-extrabold text-sm p-[2px]">{discountPercentage}%off</span>
    <h2 className="text-sm md:text-xl mr-3 font-bold">
    ${(price-(price*discountPercentage/100)).toFixed(2)} </h2>
    <div className="flex justify-center items-center gap-1"> Subtotal ({totalItems>1?totalItems+" items":totalItems+" item"}):<h2 className=" line-through  text-sm md:text-md mr-3">
    ${price.toFixed(2)} </h2></div>
 
 
</div>
}

export default DiscountPrice;
