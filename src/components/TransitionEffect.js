import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-stripe1/30 dark:bg-stripe1_dark/30"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 z-20 w-screen h-screen right-full bg-stripe2/30 dark:bg-stripe2_dark/30"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 z-10 w-screen h-screen right-full bg-stripe3/30 dark:bg-stripe3_dark/30"
      />
    </>
  );
};

export default TransitionEffect;
