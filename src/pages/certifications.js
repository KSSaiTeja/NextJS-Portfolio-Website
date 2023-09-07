import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

// certificates import statements


const FramerImage = motion(Image);


const Certification = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-xl md:text-ase">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            className="text-lg font-semibold hover:underline md:text-base "
            href={link}
            target="_blank"
          >
            Visit Repo
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Certifications = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | Certifications</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Certified and Confident!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Certification
                img={Focusly1}
                title="Focusly App"
                summary=""
                github="https://github.com/Utkarshn10/Focusly/pull/102"
                link="https://github.com/Utkarshn10/Focusly"
                type="Contribution"
              />
            </div>
            <div className="col-span-6 h-max sm:col-span-12">
              <Certification
                img={Focusly2}
                title="Focusly App"
                summary=""
                link="https://github.com/Utkarshn10/Focusly"
                github="https://github.com/Utkarshn10/Focusly/pull/104"
                type="Contribution"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Certifications;