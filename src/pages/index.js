import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import test from "../../public/images/profile/test.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>K S Sai Teja&apos;s | Portfolio</title>
        <meta name="description" content="Built by K S Sai Teja" />
        <meta property="og:title" content="K S Sai Teja" />
        <meta property="og:description" content="Built by K S Sai Teja" />
        <meta property="og:url" content="https://kssaiteja.me/" />
        <meta
          property="og:image"
          content="../../social.png"
        />
        <link rel="icon" href="../../public/favicon.ico" type="image/x-icon" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={test}
                alt="profile-picture"
                className="w-4/5 h-auto lg:hidden md:inline-block md:w-full rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:text-5xl sm:text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              Hello, I&apos;m K S Sai Teja. Following my graduation, I transitioned into a UI/UX designer role, a field I am deeply passionate about as it perfectly blends technology with creativity. I am currently seeking opportunities where I can contribute to innovative and user-centric projects. My engineering background aids in my systematic approach to design, ensuring that I maintain functionality while enhancing user engagement through aesthetic and intuitive interfaces.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://i.ibb.co/6b4MGJP/kssaiteja-me.jpg"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:saitej4865@gmail.com"
                  className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-24 right-8 bottom-8 md:hidden">
          <Image src={lightBulb} alt="Light-icon" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
