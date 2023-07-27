import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
      >
        <div>
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize dark:text-primaryDark"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm  ">
            {time} | {address}
          </span>
          <p className=" font-medium  w-full md:text-sm ">{work}</p>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Intern"
            company="Google Developers Group"
            time="2022"
            address="Andhra Pradesh, India."
            work="
            Working with Google Developers Group was an incredible experience for me. Being associated with Google, one of the leading tech companies globally, added immense credibility to my profile.
            
            I had the privilege to work on some exciting projects during my GDG internship. From ideation to implementation, I contributed to projects that had a positive impact within the tech community.
            "
          />

          <Details
            position="Bootcamp"
            company="Microsoft Student Ambassador"
            time="Summer 2022"
            address="Andhra Pradesh, India."
            work="Being a part of the Microsoft Student Ambassador program allowed me to build a thriving tech community on my campus. I organized meetups, hackathons, and coding competitions, fostering an environment of learning and collaboration. Through my leadership role, I empowered others to explore their passion for technology and encouraged them to make a positive impact using Microsoft technologies."
          />

          <Details
            position="Intern"
            company="Amazon Web Services"
            time="2022"
            address="Andhra Pradesh, India."
            work="
            Collaborated with cross-functional teams to plan and execute AWS projects, ensuring effective communication and coordination throughout the process.
            Demonstrated strong problem-solving skills while resolving issues related to AWS infrastructure and services, ensuring minimal downtime and smooth operations.
            "
          />

          <Details
            position="Intern"
            company="Robocoupler"
            time="2023"
            address="Andhra Pradesh, India."
            work=" Demonstrated strong problem-solving skills, tackling challenges that arose during projects and making informed decisions to overcome obstacles. Managed time effectively to balance multiple tasks and responsibilities at Robocoupler, ensuring productivity and meeting deadlines."
          />

          <Details
            position="Intern"
            company="Devtown"
            time="2023"
            address="Andhra Pradesh, India."
            work="Demonstrated strong problem-solving skills, identifying challenges and finding creative solutions to overcome them. Proficiently identified and resolved technical issues and challenges during projects at Devtown, utilizing analytical skills and technical expertise to ensure smooth development and deployment processes."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
