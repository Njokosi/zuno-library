import Head from "next/head";
import Image from "next/image";
import { format as fnsFormat, parseISO } from "date-fns";
import { fetcher } from "../../utils/fetcher";
import { Main } from "../../templates/Main";
import { Meta } from "../../layout/Meta";

import { LoadingMedias, Nav, Outro } from "../../components";

import useSWR from "swr";
import { EmptyMediaCard, MediaCardDetail } from "../../components/cards";
import { CheckoutLineChart } from "../../components/charts";

function GetMediaDetail() {
  const { data, error } = useSWR(
    "http://127.0.0.1:8000/api/v1/medias/3277676/",
    fetcher
  );

  return {
    media: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function GetMediaCheckoutDetail() {
  const { data, error } = useSWR(
    "http://127.0.0.1:8000/api/v1/medias/checkout/3277676/",
    fetcher
  );

  return {
    checkout: data,
    isCheckoutLoading: !error && !data,
    isCheckoutError: error,
  };
}

export default function Media() {
  const { media, isLoading, isError } = GetMediaDetail();
  const { checkout, isCheckoutLoading, isCheckoutError } =
    GetMediaCheckoutDetail();

  let checkoutCountData =
    checkout &&
    checkout.reduce(function (result, order) {
      var day = fnsFormat(new Date(order.checkoutdatetime), "dd MMMM yyyy");
      if (!result[day]) {
        result[day] = 0;
      }
      result[day]++;
      return result;
    }, {});

  console.log("Media data: ", media);
  console.log("Media checkout data: ", checkout);
  console.log("Checkout count: ", checkoutCountData);

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
              {checkoutCountData && (
                <div className="max-w-4xl p-12 mx-auto border rounded-2xl border-slate-200">
                  <CheckoutLineChart
                    categories={Object.keys(checkoutCountData)}
                    data={Object.values(checkoutCountData)}
                  />
                </div>
              )}
            </>
          )
        )}

        {/* <Footer /> */}
      </div>
    </Main>
  );
}
