import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[4rem] px-8 flex items-center justify-between relative">
      <div className="flex-wrap w-1/2 pr-2">
        <div class="flex-none relative z-10 flex flex-col items-start lg:pt-10 max-w-screen-sm mx-auto lg:max-w-2xl lg:mx-0 lg:pr-20 mb-12 sm:mb-16 lg:mb-0">
          <h1 class="order-1 text-3xl sm:text-5xl sm:leading-none font-extrabold tracking-tight text-slate-800 mb-4">
            <span class="text-emerald-600">Get your new Book</span> with the
            BEST price
          </h1>

          <p class="order-2 leading-relaxed mb-8">
            Over 500+ professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your heart’s content. Get started by checking out
            our free preview components, or browsing all of the examples in the
            categories you're most curious about.
          </p>

          <div class="order-2 w-full text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
            <a
              href="/preview"
              class="text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Try it out
            </a>
            <a
              href="#components"
              class="text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Browse everything
            </a>
          </div>
        </div>
      </div>
      <div className="block w-1/2 overflow-show">
        <div className="w-[78rem]">
          {/* <Image src="https://images.pexels.com/photos/1181571/pexels-photo-1181571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Person in a library" /> */}
          <img
            src="https://images.pexels.com/photos/1181571/pexels-photo-1181571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-auto rounded-2xl drop-shadow-xl max-h-[45rem] hover:backdrop-opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
