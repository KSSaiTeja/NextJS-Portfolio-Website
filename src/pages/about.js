import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import test from "../../public/images/profile/test.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | About</title>
        <meta
          name="About page"
          content="all about my self and my achievements and skills"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                About Me
              </h2>
              <p className="font-medium">
                K S Saiteja Kalepu is a dynamic and driven UI/UX Designer with a
                strong passion for design and front-end development. With a
                Bachelor's in Electronics and Communication Engineering from
                Raghu Engineering College and a Diploma in ECE from VSM College
                of Engineering, K S Saiteja brings a solid foundation in both
                engineering fundamentals and web development technologies. His
                technical proficiency includes expertise in UI/UX design tools
                such as Figma, Protopie, and Zeplin, as well as front-end
                languages like HTML and CSS.
              </p>
              <p className="my-4 font-medium">
                Through his internship experiences at Heamac Healthcare Pvt.
                Ltd. and Brainquest Consultancy and Training, K S Saiteja has
                demonstrated his ability to improve UX design proficiency and
                enhance user engagement metrics through meticulous attention to
                detail and implementation of best practices. His impressive
                project portfolio showcases his talent in designing intuitive
                and visually appealing interfaces, resulting in significant
                improvements in user retention, mobile conversion rates, and
                overall user satisfaction.
              </p>
              <p className="font-medium">
                In addition to his professional achievements, K S Saiteja's
                extracurricular activities reflect his commitment to continuous
                learning and innovation, earning accolades in competitive
                programming, frontend responsive design, and sustainable energy
                solutions. With his exceptional skills and dedication to
                excellence, K S Saiteja is poised to make significant
                contributions to any dynamic team in the field of UI/UX design.
              </p>
            </div>

            <div className="relative col-span-3 p-8 border h-max rounded-2xl bg-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-shadow_light dark:shadow_dark blur-sm dark:blur-lg " />
              <Image
                src={test}
                alt="kssaiteja"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
