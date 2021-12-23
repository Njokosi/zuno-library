import React from "react";
import Link from "next/link";

// import { Footer, Navbar, SearchBar, Hero } from "../components";

export const Main = (props) => {
  return (
    <div className="w-full overflow-hidden antialiased bg-white">
      {props.meta}
      <div className="content">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};
