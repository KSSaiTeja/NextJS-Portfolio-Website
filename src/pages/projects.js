import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// GIFs

import taskflowgif from "../../public/images/projects/taskflow.gif";

import hyperflix from "../../public/images/projects/hyperflix.jpg";
import AiTextEditor from "../../public/images/projects/AiTextEditor.jpg";
import Portfolio from "../../public/images/projects/3dPortfolio.jpg";
import WeatherApp from "../../public/images/projects/WeatherApp.jpg";
import TypingTest from "../../public/images/projects/TypingTest.jpg";
import ToDoApp from "../../public/images/projects/ToDoApp.jpg";
import shopit from "../../public/images/projects/shopit.png";
import taskflow from "../../public/images/projects/taskflow.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 shadow-2xl rounded-3xl bg-light rounded-br-2xl dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-shadow_light blur-sm rounded-br-3xl dark:bg-shadow_dark dark:blur-lg  xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full "
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
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2 ">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
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
    <article className="relative flex flex-col items-center justify-between w-full p-6 border rounded-2xl bg-light dark:bg-dark dark:border-border_dark xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-shadow_light rounded-br-3xl dark:bg-shadow_dark blur-sm dark:blur-lg md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full overflow-hidden rounded-lg cursor-pointer"
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
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-xl md:text-ase">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
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
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Imagination Trumps Knowledge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={taskflowgif}
                title="TaskFlow | Task Management App"
                summary="TaskFlow, a full-stack task management app, Users can effortlessly manage tasks with features like real-time updates and secure authentication through JSON Web Tokens. The application ensures data consistency by utilizing a database to store task information"
                link="https://taskflowpro.vercel.app"
                github="https://github.com/KSSaiTeja/taskflow-final-version"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={AiTextEditor}
                title="Ai Text Editor"
                summary="Text Editor using AI"
                link="https://github.com/KSSaiTeja/AI-TextEditor"
                github="https://github.com/KSSaiTeja/AI-TextEditor"
                type="Project"
              />
            </div>
            <div className="col-span-6 h-max sm:col-span-12">
              <Project
                img={Portfolio}
                title="Portfolio Website"
                summary="portfolio website using threejs"
                link="https://karthikeya.me"
                github="https://github.com/KSSaiTeja/portfolio-3d"
                type="Project"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                img={shopit}
                title="ShopIt"
                summary="ShopIt, an e-commerce platform, employs a Next.js and React-based front end for an interactive and user-friendly shopping interface. The back end is powered by Node.js, with SQL and PostgreSQL managing the database for efficient product data storage."
                link="https://shop.kssaiteja.me"
                github="https://shop.kssaiteja.me"
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
            <div className="col-span-6 h-fit sm:col-span-12">
              <Project
                img={ToDoApp}
                title="ToDo web app"
                summary="ToDo web app"
                link="https://github.com/KSSaiTeja/ToDoApp"
                github="https://github.com/KSSaiTeja/ToDoApp"
                type="Project"
              />
            </div>
            <div className="col-span-6 h-fit sm:col-span-12">
              <Project
                img={hyperflix}
                title="Hyperflix"
                summary="Ad free entertainment platform"
                link="https://hyperflix.kssaiteja.me"
                github="https://github.com/KSSaiTeja/HyperFlix"
                type="Project"
              />
            </div>
            <div className="col-span-6 h-fit sm:col-span-12">
              <Project
                img={WeatherApp}
                title="Climascope"
                summary="Weather App"
                link="https://github.com/KSSaiTeja/Weather-App-Omnify"
                github="https://github.com/KSSaiTeja/Weather-App-Omnify"
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
