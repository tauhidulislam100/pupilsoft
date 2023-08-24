import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-dark"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
