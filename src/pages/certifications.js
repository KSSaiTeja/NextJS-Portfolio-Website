import { LinkedInIcon } from "@/components/Icons";

const certifications = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center font-bold text-4xl">
        My certifications will be uploaded soon..
        <hr className="my-4" />
      </h1>

      <div class="inline-flex items-center text-3xl hover:underline underline-offset-2">
        Meanwhile check &nbsp;{" "}
        <a href="https://linkedin.com/in/kssaiteja" target="_blank">
          <LinkedInIcon class="w-6 h-6 cursor-pointer hover:scale-125" />
        </a>{" "}
        &nbsp; profile
      </div>
    </div>
  );
};

export default certifications;
