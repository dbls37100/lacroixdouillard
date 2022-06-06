import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&family=Old+Standard+TT&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta title="Les Caves de la Croix Douillard"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
