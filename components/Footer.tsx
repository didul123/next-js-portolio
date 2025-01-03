"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="Decorative grid"
          className="w-full h-full opacity-50"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Talent is everywhere <span className="text-purple">opportunity</span>{" "}
          should be too
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://linktr.ee/imdidul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-center mx-auto">
          Copyright © 2025 Didul Adeesha - UI/UX Designer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
