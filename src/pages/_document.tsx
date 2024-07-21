import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
