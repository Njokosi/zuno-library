import React from "react";
import Link from "next/link";

// import { Footer, Navbar, SearchBar, Hero } from "../components";

export const Main = (props) => {
  return (
    <div className="w-full px-1 antialiased text-gray-700 bg-white">
      {props.meta}
      <div className="overflow-hidden bg-light-yellow">
        <div className="mx-auto max-w-7xl">
          {/* <Navbar />
          <div className="w-full bg-light-yellow">
            <SearchBar />
            <Hero />
          </div> */}
        </div>
      </div>
      <div className="text-xl content">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};
