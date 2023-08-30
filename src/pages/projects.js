import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import hyperflix from "../../public/images/projects/hyperflix.jpg";
import AiTextEditor from "../../public/images/projects/AiTextEditor.jpg";
import Portfolio from "../../public/images/projects/3dPortfolio.jpg";
import WeatherApp from "../../public/images/projects/WeatherApp.jpg";
import TypingTest from "../../public/images/projects/TypingTest.jpg";
import ToDoApp from "../../public/images/projects/ToDoApp.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light  xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  "
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base  ">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
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
            className="text-lg font-semibold underline md:text-base "
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | Projects</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Imagination Trumps Knowledge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={hyperflix}
                title="HyperFlix | Ad Free Entertainment platform"
                summary="Ad-Free Experience: Enjoy videos without interruptions from advertisements.
                User-Friendly Interface: The platform is designed with simplicity in mind, making it easy for both content creators and viewers to navigate and use."
                link="https://hyperflix.kssaiteja.me/"
                github="https://github.com/KSSaiTeja/HyperFlix"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={AiTextEditor}
                title="Ai Text Editor"
                summary="This is a web app designed to empower and inspire creative writers by combining the power of artificial intelligence with the art of storytelling. By using this, users can tap into the vast capabilities of AI to enhance their writing process, generate ideas, and receive personalized suggestions to improve their creative works."
                link="https://github.com/KSSaiTeja/AI-TextEditor"
                github="https://github.com/KSSaiTeja/AI-TextEditor"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 h-max sm:col-span-12">
              <Project
                img={Portfolio}
                title="Portfolio Website using ThreeJS"
                summary="portfolio website using threejs"
                link="https://karthikeya.me"
                github="https://github.com/KSSaiTeja/portfolio-3d"
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                img={WeatherApp}
                title="ClimaScope | Full Stack Weather Application"
                summary="Led the development of ClimaScope, using Next.js, Weather API, and TailwindCSS, and it provides real-time weather updates, accurate forecasts, and customized notifications for your location."
                link="https://github.com/KSSaiTeja/Weather-App-Omnify"
                github="https://github.com/KSSaiTeja/Weather-App-Omnify"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={TypingTest}
                title="Typing Tester using HTML, CSS & JS"
                summary="Typing Tester using HTML, CSS & JS"
                link="https://github.com/KSSaiTeja/TypingTest"
                github="https://github.com/KSSaiTeja/TypingTest"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={ToDoApp}
                title="ToDo web app"
                summary="ToDo web app"
                link="https://github.com/KSSaiTeja/ToDoApp"
                github="https://github.com/KSSaiTeja/ToDoApp"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
