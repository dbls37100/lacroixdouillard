import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Les Caves de la croix Douillard" />
        <meta name="description" content="Les Caves de la croix Douillard" />
        <meta
          name="google-site-verification"
          content="ca7u7GMXe6n3aqnzsFOyf9iwVOHG6NAMCHPZVeut2bI"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&family=Old+Standard+TT&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
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
