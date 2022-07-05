import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        {/* <meta
          name="application-name"
          content="Les caves de la Croix Douillars"
        /> */}
        {/* <meta name="title" content="Les Caves de la croix Douillard" />
        <meta
          name="description"
          content="Salle à louer situé à Amboise pour mariage, anniversaire, séminaire ou tout autre évenements"
        /> */}
        <meta
          name="google-site-verification"
          content="ca7u7GMXe6n3aqnzsFOyf9iwVOHG6NAMCHPZVeut2bI"
        />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <style data-href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Alex+Brush&display=swap">
        
        </style> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Alex+Brush&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
          rel="stylesheet"
        /> */}
        {/* <meta charSet="utf-8" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
