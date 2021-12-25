import React from "react";
import Head from "next/head";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

import useSWR from "swr";

import { fetcher } from "../utils/fetcher";
import { Main } from "../templates/Main";
import { Meta } from "../layout/Meta";
import {
  LoadingMedias,
  MediaDetail,
  MediaList,
  Nav,
  Outro,
} from "../components";

import { EmptyMediaCard } from "../components/cards";

function GetMediaList() {
  const { data, error } = useSWR(
    "http://127.0.0.1:8000/api/v1/medias/",
    fetcher
  );

  return {
    medias: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function MediasList() {
  const { medias, isLoading, isError } = GetMediaList();

  console.log("Medias: ", medias);
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
            <SearchIcon className="w-6 h-6 mx-2 text-slate-400" />
            <input
              className="flex-1 bg-transparent focus:outline-none"
              type="text"
              placeholder="Search for book"
            />
          </div>
        </div>
        <Outro
          title="Browse medias"
          description="Browse different books, podcasts, stories ranging from fiction to non-fiction, engineering, science and development."
        />

        
        {isLoading ? (
          <LoadingMedias />
        ) : isError ? (
          <EmptyMediaCard message="An error occurred" />
        ) : 
          medias && medias.length > 0 && (
            <MediaList>
              {medias.map((media) => (
                <MediaDetail key={media.bibnum} title={media.title} />
              ))}
            </MediaList>
          ) || <EmptyMediaCard message="No media available" />
        }
      </div>
    </Main>
  );
}
