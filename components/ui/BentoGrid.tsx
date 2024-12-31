import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Adjust grid layout for better responsiveness
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "adeeshadidul@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {img && (
          <div className="absolute w-full h-full">
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}
        {spareImg && (
          <div className="absolute right-0 -bottom-5">
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold text-3xl md:text-4xl lg:text-7xl text-center"></div>
          </BackgroundGradientAnimation>
        )}
      </div>

      {/* Content Section */}
      <div
        className={cn(
          titleClassName,
          "relative min-h-40 flex flex-col px-5 py-5 lg:p-10 space-y-4"
        )}
      >
        {/* Description */}
        <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3]">
          {description}
        </div>

        {/* Title */}
        <div className="font-sans text-lg lg:text-3xl font-bold max-w-96 text-white">
          {title}
        </div>

        {/* GitHub Globe */}
        {id === 2 && <GridGlobe />}

        {/* Tech Stack */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base bg-[#10132E] rounded-lg text-center opacity-80"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base bg-[#10132E] rounded-lg text-center opacity-80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Copy Email Button */}
        {id === 6 && (
          <div className="mt-5 relative">
            {copied && (
              <div className="absolute -bottom-5 right-0">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
            )}
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
