/* eslint linebreak-style: ["error", "windows"] */

const testRequest = require('supertest');
const expectJS = require('expect.js');
const myapp = require('../app.js');

describe('Server Tests', () => {
  describe('Normal Functionality Tests', () => {
    describe('When the client visits /', () => {
      it('should serve an html page in the body', (done) => {
        testRequest(myapp)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });
    });
    describe('When the client visits /login', () => {
      it('should serve an html page in the body', (done) => {
        testRequest(myapp)
          .get('/login')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });
    });
    describe('When the client visits /signup', () => {
      it('should serve an html page in the body', (done) => {
        testRequest(myapp)
          .get('/signup')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });
    });
  });
});
