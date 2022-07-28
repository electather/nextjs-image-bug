# NextJs Image priority Bug

This repo is the minimal reproduction of the stencil webcomponent issue with NextJs Image component.

## get started

install dependencies

```bash
yarn install
```

build the web-components

```bash
yarn client
```

then run the app

```bash
yarn server
```

then open the browser and navigate to http://localhost:3000/

## issue

wait two seconds for the state to change. the styles for the checkbox should be removed.

## solution

removing `priority` property from the NextImage component.
