'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/wechat.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/wechat-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, wechat')
      .expect(200);
  });

  it('should GET /wx', () => {
    return request(app.callback())
      .get('/wx')
      .expect('hi, wechat')
      .expect(200);
  });
});
