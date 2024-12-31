"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Main Services</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            // Generate random duration for animation
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              // Gradient background for the button
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // Rounded border radius for a smoother appearance
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.title} // Use a meaningful alt text for better accessibility
                className="lg:w-32 md:w-20 w-16"
                width={128} // Adjust width as needed
                height={128} // Adjust height as needed
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
