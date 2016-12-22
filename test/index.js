'use strict';

const chai     = require('chai'),
      chaiHttp = require('chai-http'),
      index    = require('../index'),
      should   = chai.should();

chai.use(chaiHttp);

describe('/', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});
