import Head from "next/head";
import Image from "next/image";
import { Main } from "../templates/Main";
import { Meta } from "../layout/Meta";
import { Books, Footer, Hero, Nav, Outro } from "../components";

export default function Home() {
  return (
    <Main
      meta={
        <Meta
          title="Zuno | Books"
          description="List of all the books in the library."
        />
      }
    >
      <div
        className="w-full bg-green-200 h-[28rem] absolute top-[19.5rem]"
        style={{
          background: "linear-gradient(90deg,#ecfeff,#ccfbf1 50%)",
          filter: "blur(400px)",
        }}
      />
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Nav />
        <div className="w-full mt-8">
          <div className="flex items-center w-full max-w-md px-2 py-4 mx-auto mt-8 bg-white border rounded-full border-slate-300 hover:border-emerald-600">
            <svg
              className="mx-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C10.8039 18 12.4839 17.4693 13.8922 16.5555C14.3197 16.2781 14.8903 16.3045 15.2506 16.6648L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.6648 15.2506C16.3045 14.8903 16.2781 14.3197 16.5555 13.8922C17.4693 12.4839 18 10.8039 18 9C18 4.02944 13.9706 0 9 0Z"
                fill="#909CAD"
              ></path>
            </svg>
            <input
              className="flex-1 bg-transparent focus:outline-none"
              type="text"
              placeholder="Search for book"
            />
          </div>
        </div>
        <Outro
          title="Browse books"
          description="Browse different books ranging from fiction to non-fiction, engineering, science and development."
        />

        <Books />
        {/* <Footer /> */}
      </div>
    </Main>
  );
}
