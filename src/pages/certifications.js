import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

// certifications

import IEEE from "../../public/images/certificates/IEEE Xtreme 17.0.png";
import AIML from "../../public/images/certificates/AI ML.png";
import CF from "../../public/images/certificates/AWS CF.png";
import ML from "../../public/images/certificates/AWS ML.png";
import lor from "../../public/images/certificates/cisco lor.png";
import cisco from "../../public/images/certificates/cisco.png";
import robo from "../../public/images/certificates/robocoupler.png";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Certificate = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl bg-light text-dark first:mt-0 border-article_light dark:border-article_dark dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedCertificate = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border bg-light rounded-2xl dark:bg-dark dark:border-border_dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-shadow_light dark:bg-shadow_dark rounded-br-3xl  blur-sm dark:blur-lg " />
      <Link
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="mb-2 text-sm ">{summary}</p>
        <span className="font-semibold text-primary dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

const certificates = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | Certifications</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Certified And Confident!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedCertificate
              title="IEEE Xtreme 17.0 | AIR 58"
              summary="
              My participation in IEEE Xtreme 17.0 got AIR 58! This experience highlights my dedication to problem-solving and collaboration in computer science, showcasing a passion for innovation. Best wishes for ongoing success on my journey!
              "
              link="http://tinyurl.com/yndonzby"
              img={IEEE}
            />
            <FeaturedCertificate
              title="IT Essentials: PC Hardware and Software from Cisco Networking Academy"
              summary="I am delighted to announce the successful completion of the Cisco IT Essentials certification. This achievement signifies my comprehensive understanding of fundamental IT concepts, including hardware, software, networking, and security essentials. The skills acquired through this certification enhance my proficiency in managing IT systems, troubleshooting issues, and ensuring the seamless operation of technology infrastructures. I am excited to apply this knowledge in real-world scenarios, contributing to the ever-evolving field of information technology."
              link="http://tinyurl.com/ym37rzr9"
              img={cisco}
            />
          </ul>
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
            All Certifications
          </h2>
          <ul>
            <Certificate
              title="Robocoupler Embedded Systems"
              date="July 31, 2023"
              link="http://tinyurl.com/yso5onkl"
              img={robo}
            />
            <Certificate
              title="AWS Certified Cloud Foundations"
              date="Oct 13, 2022"
              link="http://tinyurl.com/ytckaz3l"
              img={CF}
            />
            <Certificate
              title="AWS Certified Machine Learning Foundations"
              date="Oct 13, 2022"
              link="http://tinyurl.com/yugoqgcl"
              img={ML}
            />
            <Certificate
              title="LOR from Cisco Networking Academy"
              date="Sep 15, 2019"
              link="http://tinyurl.com/ytoe842x"
              img={lor}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certificates;
