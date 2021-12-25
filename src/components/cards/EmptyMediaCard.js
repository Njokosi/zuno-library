import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";

const EmptyMediaCard = ({ message }) => {
  const router = useRouter();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        
        <div className="mb-4 lg:mb-6">
          
          {/* <Image src={`/public/images/illustrations/media.svg`} height="300" width="300"/> */}
          <img
            className="object-contain w-full h-56 sm:h-64 md:h-80 lg:h-96"
            src={router.basePath + "/images/illustrations/media.svg"}
            alt=""
          />
        </div>
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};


export default EmptyMediaCard;