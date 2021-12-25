import Head from "next/head";
import Image from "next/image";

import { fetcher } from "../../utils/fetcher";
import { Main } from "../../templates/Main";
import { Meta } from "../../layout/Meta";

import { LoadingMedias, Nav, Outro } from "../../components";

import useSWR from "swr";
import { EmptyMediaCard, MediaCardDetail } from "../../components/cards";

function GetMediaDetail() {
  const { data, error } = useSWR(
    "http://127.0.0.1:8000/api/v1/medias/723015/",
    fetcher
  );

  return {
    media: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Media() {
  const { media, isLoading, isError } = GetMediaDetail();

  console.log("Media data: ", media);
  return (
    <Main
      meta={
        <Meta
          title="Zuno | Book"
          description="The information concerning the book."
        />
      }
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Nav />

        {isLoading ? (
          <LoadingMedias />
        ) : isError ? (
          <EmptyMediaCard message="An error occured or media not found" />
        ) : (
          media && (
            <>
              <MediaCardDetail
                title={media.title}
                author={media.author}
                subjects={media.subjects}
                isbn={media.isbn}
                publisher={media.publisher}
                publicationyear={media.publicationyear}
                itemtype={media.itemtype}
              />
              <Outro
                title="Checkout information"
                description="View the number of times and when the book was checked out"
              />
            </>
          )
        )}

        {/* <Footer /> */}
      </div>
    </Main>
  );
}
