import React from "react";

function Stripe({item}) {
  return (
    <div className="w-[20%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between text-white">
      <img src={item.url} alt="" />
      <span>{item.number}</span>
    </div>
  );
}

export default Stripe;
