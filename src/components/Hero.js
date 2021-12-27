import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[4rem] px-8 flex items-center justify-between relative">
      <div className="flex-wrap w-1/2 pr-2">
        <div className="relative z-10 flex flex-col items-start flex-none max-w-screen-sm mx-auto mb-12 lg:pt-10 lg:max-w-2xl lg:mx-0 lg:pr-20 sm:mb-16 lg:mb-0">
          <h1 className="order-1 mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-none text-slate-800">
            <span className="text-emerald-600">Get your new Book</span> with the
            BEST price
          </h1>

          <p className="order-2 mb-8 leading-relaxed">
            Over 500+ professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your hearts content. Get started by checking out
            our free preview components, or browsing all of the examples in the
            categories you are most curious about.
          </p>

          <div className="grid order-2 w-full grid-cols-1 gap-3 text-center sm:flex sm:gap-0 sm:space-x-6">
            <a
              href="/preview"
              className="px-4 py-3 text-sm font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Try it out
            </a>
            <a
              href="#components"
              className="px-4 py-3 text-sm font-semibold text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
