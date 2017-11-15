const mocha = require('mocha'),
    mongoose = require('mongoose'),
    User = require('../api/model/userModel'),
    server = require('../server'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    describe('/POST user', () => {
        it('it should create a new user', (done) => {
            let user = {
                name: 'Steve',
                handle: 'debruv',
                email: 'dstevie9292@gmail.com',
                password: 'String'
            }
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });
});