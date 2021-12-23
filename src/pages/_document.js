import Document, { Html, Head, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="images/icons/icon-96x96.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#2196f3" />
          <meta name="theme-color" content="#2196f3" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
