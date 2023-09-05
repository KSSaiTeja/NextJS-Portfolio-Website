"use client";

import { LinkedInIcon } from "@/components/Icons";

const certifications = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center font-bold">
        My certifications will be uploaded soon..
        <hr />
      </h1>

      <div style={display=inline-block}>
        Meanwhile check <LinkedInIcon className="w-6 h-6" /> profile
      </div>

    </div>
  );
};

export default certifications;
