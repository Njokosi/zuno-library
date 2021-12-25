import React from "react";
import Link from "next/link";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const MediaDetail = ({ title, id }) => {
  return (
    <div
      className="flex flex-col px-4 pt-0 pb-4 md:px-10 md:pb-12"
      style={{ background: "#F7F7FB" }}
    >
      <a href="/">
        <img
          className="object-cover w-full max-w-full -mt-8 rounded"
          src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </a>
      <div>
        <span className="inline-block px-2 my-8 ml-2 font-medium rounded-lg text-emerald-700 bg-emerald-100">
          Available
        </span>
        <h3 className="-mt-2 text-gray-700">{title}</h3>
        <Link href={`/medias/${id}`}>
          <a className="inline-flex items-center justify-center w-full px-4 py-2 mt-6 font-medium bg-transparent border border-gray-400 rounded md:w-auto text-slate-800 hover:border-gray-500">
            Learn more
            <ArrowSmRightIcon className="w-5 h-5 ml-2 " />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MediaDetail;
