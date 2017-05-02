# React Chrome Extension Boilerplate


[![Build Status](https://travis-ci.org/jhen0409/react-chrome-extension-boilerplate.svg?branch=master)](https://travis-ci.org/jhen0409/react-chrome-extension-boilerplate)
[![Build status: Windows](https://ci.appveyor.com/api/projects/status/b5xy6ev6oykth0d2/branch/master?svg=true)](https://ci.appveyor.com/project/jhen0409/react-chrome-extension-boilerplate/branch/master)
[![NPM version](http://img.shields.io/npm/v/react-chrome-extension-boilerplate.svg?style=flat)](https://www.npmjs.com/package/react-chrome-extension-boilerplate)
[![Dependency Status](https://david-dm.org/jhen0409/react-chrome-extension-boilerplate.svg)](https://david-dm.org/jhen0409/react-chrome-extension-boilerplate)
[![devDependency Status](https://david-dm.org/jhen0409/react-chrome-extension-boilerplate/dev-status.svg)](https://david-dm.org/jhen0409/react-chrome-extension-boilerplate#info=devDependencies)

**TODO: Update those ^**

> Chrome client for my todo list (Learn more at [https://github.com/pranaygp/ls-it](https://github.com/pranaygp/ls-it))

## Installation

```bash
# clone it
$ git clone https://github.com/pgpraka2/ls-it-Chrome-Client.git

# Install dependencies
$ yarn
# or
$ npm install
# I think I also had to do
$ npm install --dev
```

## Development

* Run script
```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```
* If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

#### React/Redux hot reload

This project uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window & Inject page.

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

## Test

* `test/app`: React components, Redux actions & reducers tests
* **UNIMPLEMENTED** `test/e2e`: E2E tests (use [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver))

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e unimplemented
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)
