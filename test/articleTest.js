'use strict';

process.env.NODE_ENV = 'test';
const mocha = require('mocha'),
    mongoose = require('mongoose'),
    Article = require('../api/model/articleModel'),
    server = require('../server'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect;

chai.use(chaiHttp);

describe('Article', () => {
    beforeEach((done) => {
        Article.remove({}, (err) => {
            done();
        });
    });

    describe('/GET', () => {
        it('it should get all articles', (done) => {
            chai.request(server)
                .get('/articles')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body).to.have.length.not.eql(0);
                    done();
                });
        });
    });
});