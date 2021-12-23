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
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Nav />

        <div
          className="flex flex-col px-4 pt-0 pb-4 mt-32 md:px-10 md:pb-12"
          style={{ background: "#F7F7FB" }}
        >
          <a href="/course/whats-new-in-php-8">
            <img
              className="object-cover w-full max-w-md -mt-8 rounded"
              src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>

          <div>
            <h2 className="inline-block px-2 my-8 font-medium border rounded-lg border-slate-500 ">
              Available
            </h2>
            <h3 className="-mt-2 text-2xl font-bold text-slate-900">
              Learn all about the new features that PHP 8 has to offer
            </h3>
            <div className="flex items-center text-slate-600">
              <span>by</span>
              <a className="mx-1 text-sky-600">John Oscar</a>
              <span className="font-extralight text-slate-400">(Author)</span>
            </div>

            <hr className="my-8 border-slate-300" />
            <p className="font-normal leading-6 text-slate-600">
              Subjects: Black people invented everything
            </p>
            <hr className="my-8 border-dashed border-slate-300" />
            <div className="grid grid-cols-4 gap-12">
              <div>
                <h3 className="text-sm font-medium text-gray-900">ISBN</h3>
                <p className="text-sm text-gray-600">978-1-93778-907-8</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Publisher</h3>
                <p className="text-sm text-gray-600">Apex publishers </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Publication date
                </h3>
                <p className="text-sm text-gray-600">Apex publishers </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Type</h3>
                <p className="text-sm text-gray-600">Book </p>
              </div>
            </div>
          </div>
        </div>

        <Outro
          title="Checkout information"
          description="View the number of times and when the book was checked out"
        />

        {/* <Footer /> */}
      </div>
    </Main>
  );
}
