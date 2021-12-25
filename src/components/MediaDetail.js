import React from 'react'

const MediaDetail = ({ title }) => {
    return (
      <div
        className="flex flex-col px-4 pt-0 pb-4 md:px-10 md:pb-12"
        style={{ background: "#F7F7FB" }}
      >
        <a href="/course/whats-new-in-php-8">
          <img
            className="object-cover w-full max-w-full -mt-8 rounded"
            src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </a>
        <div>
          <span className="inline-block px-2 my-8 ml-2 font-medium rounded-lg text-emerald-700 bg-emerald-100">
            Available
          </span>
          <h3 className="-mt-2 text-gray-700">
            {title}
          </h3>

          <a
            href="/course/whats-new-in-php-8"
            className="inline-flex items-center justify-center w-full px-4 py-2 mt-6 font-medium bg-transparent border border-gray-400 rounded md:w-auto text-slate-800 hover:border-gray-500"
          >
            Learn more
            <svg
              className="ml-2 fill-current"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.46236 9.06463L10.9815 4.54545L6.46236 0.0262783L5.56747 0.921164L8.5554 3.89915H0.75V5.19176H8.5554L5.56747 8.17472L6.46236 9.06463Z"
                fill="current"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    );
}

export default MediaDetail
