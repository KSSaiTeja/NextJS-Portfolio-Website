import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import LinkFree from "../../public/images/opensource/LinkFree.png";
import Focusly1 from "../../public/images/opensource/Focusly1.png";
import BingRewards from "../../public/images/opensource/BingRewards.png";
import Focusly2 from "../../public/images/opensource/Focusly2.png";

const FramerImage = motion(Image);

const FeaturedContribution = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border shadow-2xl rounded-3xl dark:border-article_dark bg-light rounded-br-2xl dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-shadow_light rounded-br-3xl dark:bg-shadow_dark blur-sm dark:blur-lg  xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
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
            Visit Repository
          </Link>
        </div>
      </div>
    </article>
  );
};

const Contribution = ({ title, type, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-between w-full p-6 border dark:border-article_dark rounded-2xl bg-light dark:bg-dark xs:p-4 ">
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

const contributions = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | Opensource</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Empower through Open Source Innovation!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedContribution
                img={LinkFree}
                title="BioDrop | An awesome platfrom to share our social links"
                summary="My contribution to the Linkfree project has been accepted and merged. Thank you 🎉  to the amazing community for the support. Together, we're building a better open-source future"
                github="https://github.com/EddieHubCommunity/BioDrop/pull/8669"
                link="https://github.com/EddieHubCommunity/BioDrop"
                type="Featured Contribution"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Contribution
                img={Focusly1}
                title="Focusly App"
                summary=""
                github="https://github.com/Utkarshn10/Focusly/pull/102"
                link="https://github.com/Utkarshn10/Focusly"
                type="Contribution"
              />
            </div>
            <div className="col-span-6 h-max sm:col-span-12">
              <Contribution
                img={Focusly2}
                title="Focusly App"
                summary=""
                link="https://github.com/Utkarshn10/Focusly"
                github="https://github.com/Utkarshn10/Focusly/pull/104"
                type="Contribution"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedContribution
                img={BingRewards}
                title="Microsoft | Bing Rewards"
                summary="My contribution to Microsoft Bing Rewards has been accepted and merged. 🎉 Grateful for the opportunity to collaborate with the incredible team at @Microsoft. Let's continue to shape the future of search and rewards!"
                github="https://github.com/microsoft-farmer/bing-rewards/pull/9"
                link="https://github.com/microsoft-farmer/bing-rewards"
                type="Featured Contribution"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contributions;
