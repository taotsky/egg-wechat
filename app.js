'use strict';
const wechat = require('./lib/wechat');

module.exports = app => {
  if (app.config.wechat.appid) wechat(app);
};
