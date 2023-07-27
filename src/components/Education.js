import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex-shrink-0" // Add this class to prevent it from affecting the layout
      >
        <div>
          <h3 className="capitalize justify-between font-bold text-2xl sm:text-xl xs:text-lg">
            {type}
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
            {time} | {place}
          </span>
          <p className=" font-medium  w-full md:text-sm">{info}</p>
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Technology In Electronics and Communication"
            time="2021-2024"
            place="Raghu Engineering College, Visakhapatnam, AP."
            info="Relavant courses included VLSI Design, Digital Signal Processing, Antenna Design etc.."
          />
          <Details
            type="Diploma in Electronics and Communication"
            time="2018-2021"
            place="VSM College of Engineering, Ramachandrapuram, AP."
            info="Relevant courses included Data Structures and Algorithms, Embedded Systems, Chip Designing etc.."
          />

          <Details
            type="Secondary School Education of Secondary School Certification"
            time="2017-2018"
            place="Muncipal Town High School, Rajahmundry, AP."
            info="Relavant courses included Physical Education, MS Office."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
