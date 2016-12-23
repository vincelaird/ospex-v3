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

// signup, login, logout route testing
describe('/signup GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/signup')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});
    
describe('/signup POST', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .post('/signup')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/login GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/login')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});
    
describe('/login POST', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .post('/login')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/logout GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/logout')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

// individual matchup details page
describe('/m/:id GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/m/:id')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

// profile page tests
describe('/p GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/p')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/p/new GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/p/new')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/p POST', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .post('/p')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/p/:id GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/p/:id')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/p/:id/edit GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/p/:id/edit')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/p/:id PUT', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .put('/p/:id')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/p/:id DELETE', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .delete('/p/:id')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

// spec page tests
describe('/m/:id/s/:specId/new GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/m/:id/s/:specId/new')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/m/:id/s POST', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .post('/m/:id/s')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/m/:id/s/:specId GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/m/:id/s/:specId')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/m/:id/s/:specId/edit GET', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .get('/m/:id/s/:specId/edit')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/m/:id/s/:specId PUT', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .put('/m/:id/s/:specId')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});

describe('/m/:id/s/:specId DELETE', () => {
    it('it should send back 200 and valid html', (done) => {
        chai.request(index)
            .delete('/m/:id/s/:specId')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
            done();
        });
    });
});
