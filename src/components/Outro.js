import React from 'react'

const Outro = ({ title, description }) => {
    return (
      <div className="flex flex-col items-center pt-12 md:pt-24">
        <h1 className="text-4xl leading-tight text-center md:text-7xl text-slate-800 font-headline">
          <p className="relative inline-block text-hulk-800">
            <span className="absolute top-0 left-0 z-10 px-1">
              {title}
            </span>
            <mark className="inline-block h-8 px-1 text-transparent translate-y-4 bg-green-100 -skew-y-5 scale-25 md:h-10">
              {title}
            </mark>
          </p>
        </h1>
        <p className="max-w-2xl pt-12 pb-16 text-lg leading-relaxed text-center text-slate-700 md:pt-6">
          {description}
        </p>
      </div>
    );
}

export default Outro
