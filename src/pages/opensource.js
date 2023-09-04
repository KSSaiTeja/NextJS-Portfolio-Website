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
            Visit Repository
          </Link>
        </div>
      </div>
    </article>
  );
};

const Contribution = ({ title, type, img, link, github }) => {
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

const contributions = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | Opensource</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
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
