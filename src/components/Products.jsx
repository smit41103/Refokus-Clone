import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const raw = [
    {
      live: true,
      case: false,
      productname: "Arqitel",
      videourl: "",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      live: true,
      case: false,
      productname: "Cula",
      videourl: "",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      live: true,
      case: false,
      productname: "TTR",
      videourl: "",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
    {
      live: true,
      case: true,
      productname: "Maniv",
      videourl: "",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    },
    {
      live: true,
      case: false,
      productname: "YIR 2022",
      videourl: "",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    },
    {
      live: true,
      case: false,
      productname: "Yahoo!",
      videourl: "",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
    },
    {
      live: true,
      case: false,
      productname: "Rainfall",
      videourl: "",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
    },
    {
      live: true,
      case: true,
      productname: "Jungle",
      videourl: "",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
    },
    {
      live: true,
      case: false,
      productname: "Silvr",
      videourl: "",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    },
    {
      live: true,
      case: false,
      productname: "Remind",
      videourl: "",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 15);
  };
  return (
    <div className="mt-20 relative">
      {raw.map((item, index) => {
        return <Product mover={mover} item={item} key={index} index={index} />;
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="absolute w-[25rem] h-[15rem] bg-white left-[44%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1] , duration:.3}}
            className="w-full h-full bg-sky-600"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1] , duration:.3}}
            className="w-full h-full bg-sky-500"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1] , duration:.3}}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1] , duration:.3}}
            className="w-full h-full bg-sky-300"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
