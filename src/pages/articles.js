import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import komodor from "../../public/images/articles/Komodor.png";
import productivity from "../../public/images/articles/productivity.png";
import quantum from "../../public/images/articles/quantum.png";
import chatgpt from "../../public/images/articles/chatgpt.png";
import foodRegime from "../../public/images/articles/foodRegime.jpg";
import docker from "../../public/images/articles/docker.png";
import dietplan from "../../public/images/articles/dietplan.jpg";
import kvsd from "../../public/images/articles/kvsd.png";
import techblog from "../../public/images/articles/techblog.jpg";
import kubernetes from "../../public/images/articles/kubernetes.png";
import devops from "../../public/images/articles/devops.png";
import kamaji from "../../public/images/articles/kamaji.png";
import beauty from "../../public/images/articles/beauty.jpeg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

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

const Article = ({ img, title, date, link }) => {
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

const FeaturedArticle = ({ img, title, time, summary, link }) => {
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

const articles = () => {
  return (
    <>
      <Head>
        <title>K S Sai Teja | Articles</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="An overview of Komodor: Its provisions for Kubernetes explained differently."
              summary="
              Komodor, introduced in 2020, is a Kubernetes tool for resource management, monitoring, and incident alerting. It offers three pricing tiers, including a freemium option, and is compatible with Kubernetes 1.16 and above. Komodor's user-friendly interface simplifies cluster management, making it valuable for development teams seeking to streamline operations and troubleshoot effectively."
              time="2 min read"
              link="https://medium.com/@KSSaiTeja/an-overview-of-komodor-its-provisions-for-kubernetes-explained-differently-26f79083cc7"
              img={komodor}
            />
            <FeaturedArticle
              title="Boosting Productivity: Best Practices and Hacks for Success"
              summary="emphasizes the importance of productivity across various aspects of life and offers practical advice to enhance it. Key practices include setting clear goals, prioritizing tasks, and managing time efficiently. Productivity hacks such as the Two-Minute Rule and Time Blocking are also highlighted. Ultimately, adopting a holistic approach to productivity through mindfulness, delegation, and a healthy lifestyle is encouraged for long-term success."
              time="3 min read"
              link="https://blog.kssaiteja.me/boosting-productivity-best-practices-and-hacks-for-success"
              img={productivity}
            />
          </ul>
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
            All Articles
          </h2>
          <ul>
            <Article
              title="Beyond Beauty: Crafting a Green Skincare Routine"
              date="Jan 18, 2024"
              link="Beyond Beauty: Crafting a Green Skincare Routine"
              img={beauty}
            />
            <Article
              title="Exploring the Cutting-Edge of Quantum Computing"
              date="Sep 24, 2023"
              link="https://blog.kssaiteja.me/exploring-the-cutting-edge-of-quantum-computing"
              img={quantum}
            />
            <Article
              title="Demystifying Docker Containerization"
              date="Sep 14, 2023"
              link="https://blog.kssaiteja.me/demystifying-docker-containerization"
              img={docker}
            />
            <Article
              title="Kamaji: Scaling Kubernetes with Ease"
              date="Sep 07, 2023"
              link="https://blog.kssaiteja.me/kamaji-scaling-kubernetes-with-ease"
              img={kamaji}
            />
            <Article
              title="Navigating the DevOps Roadmap: A Comprehensive Guide"
              date="Sep 02, 2023"
              link="https://blog.kssaiteja.me/navigating-the-devops-roadmap"
              img={devops}
            />
            <Article
              title="Kubernetes Architecture and Components: An In-Depth Overview"
              date="Aug 25, 2023"
              link="https://blog.kssaiteja.me/kubernetes-architecture-and-components"
              img={kubernetes}
            />
            <Article
              title="🐳 Docker vs. Kubernetes: Unpacking Containerization Orchestration!"
              date="Aug 21, 2023"
              link="https://blog.kssaiteja.me/docker-vs-kubernetes"
              img={kvsd}
            />
            <Article
              title="Reflecting on the First Half of 2023: Celebrating Achievements and Fueling Motivation"
              date="Aug 20, 2023"
              link="https://blog.kssaiteja.me/reflecting-on-the-first-half-of-2023-celebrating-achievements-and-fueling-motivation"
              img={techblog}
            />
            <Article
              title="ChatGPT: Revolutionising Conversational AI with GPT-3.5"
              date="June 24, 2022"
              link="https://medium.com/@KSSaiTeja/chatgpt-revolutionising-conversational-ai-with-gpt-3-5-9fec08395a6a"
              img={chatgpt}
            />
            <Article
              title="The importance of a workout regime to check diabetes"
              date="Nov 13, 2022"
              link="https://medium.com/@KSSaiTeja/the-importance-of-a-workout-regime-to-check-diabetes-a1ef75cb5e9e"
              img={foodRegime}
            />
            <Article
              title="Top diet plans you should follow for healthy life style."
              date="Nov 08, 2022"
              link="https://medium.com/@KSSaiTeja/top-diet-plans-you-should-follow-for-healthy-life-style-25905bea1e5f"
              img={dietplan}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
