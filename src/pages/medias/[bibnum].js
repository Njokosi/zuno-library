import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { format as fnsFormat, parseISO } from "date-fns";
import { fetcher } from "../../utils/fetcher";
import { Main } from "../../templates/Main";
import { Meta } from "../../layout/Meta";

import { LoadingMedias, Nav, Outro } from "../../components";

import useSWR from "swr";
import { EmptyMediaCard, MediaCardDetail } from "../../components/cards";
import { CheckoutLineChart } from "../../components/charts";

function GetMediaDetail(bibnum) {
  const { data, error } = useSWR(
    `http://127.0.0.1:8000/api/v1/medias/${bibnum}/`,
    fetcher
  );

  return {
    media: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function GetMediaCheckoutDetail(bibnum) {
  const { data, error } = useSWR(
    `http://127.0.0.1:8000/api/v1/medias/checkout/${bibnum}/`,
    fetcher
  );

  return {
    checkout: data,
    isCheckoutLoading: !error && !data,
    isCheckoutError: error,
  };
}

export default function Media(props) {
  const router = useRouter();
  const bibnum = router.query.bibnum;

  const { media, isLoading, isError } = GetMediaDetail(bibnum);
  const { checkout, isCheckoutLoading, isCheckoutError } =
    GetMediaCheckoutDetail(bibnum);

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
          <div className="mt-24">
            <LoadingMedias />
          </div>
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
