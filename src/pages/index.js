import Head from 'next/head'
import Image from 'next/image'

import { Main } from "../templates/Main";
import { Meta } from "../layout/Meta";
import { Hero, Nav } from '../components';



export default function Home() {
  return (
    <Main
      meta={
        <Meta
          title="Zuno Library"
          description="Complete solutions for farm mechanization and innovative services from land preparation to post harvesting"
        />
      }
    >
      <div
        className="w-full bg-gray-200 h-[28rem] absolute top-[19.5rem]"
        style={{
          background: "linear-gradient(180deg,#d1fae5,#cffafe 85.77%)",
          filter: "blur(100px)",
        }}
      />
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Nav />
        <Hero />
      </div>
    </Main>
  );
}
