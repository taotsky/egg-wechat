/**
 * Created by jks on 2017/4/3.
 */
'use strict';
const wechat = require('./lib/wechat');

module.exports = agent => {
  if (agent.config.wechat.appid) wechat(agent);
};
