/**
 * Created by jks on 2017/4/3.
 */
'use strict';

module.exports = () => {
  return function* wx(next) {
    yield next;
    // 后续中间件执行完成后将响应体转换成 gzip
    const body = this.body;
    if (!body) return;
    console.log(this.wechat.middleware);
    console.log(this.wechat.payment);

    // // 支持 options.threshold
    // if (options.threshold && this.length < options.threshold) return;
    // if (isJSON(body)) body = JSON.stringify(body);
    // // 设置 gzip body，修正响应头
    // const stream = zlib.createGzip();
    // stream.end(body);
    // this.body = stream;
    // this.set('Content-Encoding', 'gzip');
  };
};
