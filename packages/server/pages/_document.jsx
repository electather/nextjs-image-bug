/* eslint-disable @typescript-eslint/no-var-requires */
import Document, { Html, Head, Main, NextScript } from "next/document";
import { parse } from "node-html-parser";
import { renderToString } from "@what3words/web-components/javascript/hydrate";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   const document = await renderToString(initialProps.html);

  //   // Stencil hydrate generate a full page HTML
  //   // We need only content inside body
  //   const root = parse(document.html);
  //   const html = root.querySelector("body").innerHTML;

  //   console.log(html);
  //   return { ...initialProps, html };
  // }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
