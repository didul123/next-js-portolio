"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // Responsive adjustments for height
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  className="md:w-24 w-20"
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={40} // Adjust height as needed
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
