import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          &copy; All Rights Reserved
        </span>
        <div className="flex items-center lg:py-2 ">
          Built With
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="/"
            className="hover:underline underline-offset-2"
          >
            K S Sai Teja{" "}
          </Link>
        </div>
        <Link
          href="https://blog.kssaiteja.me"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          Checkout my <span className="font-bold text-primary dark:text-primaryDark">Blog</span> here
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
