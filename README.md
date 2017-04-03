# egg-wechat

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-wechat.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-wechat
[travis-image]: https://img.shields.io/travis/JKShare/egg-wechat.svg?style=flat-square
[travis-url]: https://travis-ci.org/JKShare/egg-wechat
[codecov-image]: https://img.shields.io/codecov/c/github/JKShare/egg-wechat.svg?style=flat-square
[codecov-url]: https://codecov.io/github/JKShare/egg-wechat?branch=master
[david-image]: https://img.shields.io/david/JKShare/egg-wechat.svg?style=flat-square
[david-url]: https://david-dm.org/JKShare/egg-wechat
[snyk-image]: https://snyk.io/test/npm/egg-wechat/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-wechat
[download-image]: https://img.shields.io/npm/dm/egg-wechat.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-wechat

<!--
Description here.
-->

## Install

```bash
$ npm i egg-wechat --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wechat = {
  enable: true,
  package: 'egg-wechat',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.wechat = {
  appid: '',
  appsecret: '',
  token: '',
  encodingAESKey: '',
  pay: {
    partnerKey: '',
    mchId: '',
    notifyUrl: '',
    pfx: ''
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/JKShare/egg-wechat/issues).

## License

[MIT](LICENSE)
