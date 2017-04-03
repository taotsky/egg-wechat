'use strict';

/**
 * wechat default config
 * @member Config#wechat
 * @property {String} SOME_KEY - some description
 */
exports.wechat = {
  appid: '<AppID>', // 微信公众平台AppId
  appsecret: '<AppSecret>', // 微信公众平台AppSecret
  token: '<TOKEN>', // 微信公众平台Token
  encodingAESKey: '<AESKey>', // 微信公众平台AESKey
  pay: {
    partnerKey: '', // 微信商户平台API密钥
    mchId: '', // 微信商户平台商户ID
    notifyUrl: '', // 微信商户平台支付结果通知地址
    pfx: '', //微信商户平台证书
  },
};
