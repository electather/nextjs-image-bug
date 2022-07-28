import "tailwindcss/tailwind.css";
import {
  applyPolyfills,
  defineCustomElements,
} from "stencil-webcomponents/loader";
import { defineCustomElements as defineCE } from "@what3words/web-components/javascript/loader";
import "@what3words/web-components/styles/base/defaults.scss";
import "@what3words/web-components/styles/base/theme.scss";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements();
      defineCE();
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
