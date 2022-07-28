import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
    { type: 'dist', empty: true, esmLoaderPath: '../loader' },
    {
      type: 'dist-custom-elements',
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
  devServer: {
    port: 3001,
  },
};
