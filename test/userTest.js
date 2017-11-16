'use strict';

process.env.NODE_ENV = 'test';
const mocha = require('mocha'),
    mongoose = require('mongoose'),
    User = require('../api/model/userModel'),
    server = require('../server'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect;

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
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body).to.have.property('name').eql('Steve');
                    done();
                });
        });
    });
});