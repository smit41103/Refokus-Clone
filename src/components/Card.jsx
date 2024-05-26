import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Card({ width, start, para ,hover="false" }) {
  return (
    
    <motion.div
      whileHover={{backgroundColor : hover=== true && "#7443ff" , padding:"30px"  }}
      className= {` text-white bg-zinc-800 rounded-md p-5  ${width} flex flex-col justify-between min-h-[60vh]`}
    >
      <div>
        <div className="flex justify-between">
          <h1>Getting Things Done!!!!</h1>
          <FaArrowRight />
        </div>
          <p className="text-3xl tracking-tight leading-none font-semibold mt-5">
            Building More Projects!!!!
          </p>
      </div>
      <div className="">
        {start === true && (
          <>
            <h1 className="text-3xl">Start a Project</h1>
            <button className="bg-zinc-800 rounded-full px-4 py-2 border-[1px]">
              Contact Us
            </button>
          </>
        )}
        {para === true && (
          <p className="text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>  
        )}
      </div>
    </motion.div>
  );
}

export default Card;
