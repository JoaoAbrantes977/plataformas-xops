const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');

// Configurar o uso do chaiHttp
chai.use(chaiHttp);
const expect = chai.expect;

// Testes
describe('App', () => {
  it('deve responder com "Hello from App Engine!" ao aceder à rota "/"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello from App Engine!');
        done();
      });
  });
});
//npm test -- --file server.test.js

