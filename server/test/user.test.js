const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../app');
const should = chai.should();
const db = require('../helpers/dropCollection');


chai.use(chaihttp);

describe('/POST user/register', function () {
    before('register test', function () {
        db.dropCollection('user');
    });
    describe('success', function () {
        it('should create a new user with a hashed password and return an object and status 201', function (done) {
            chai
                .request(app)
                .post('/user/register')
                .send({
                    email: 'mrifky@gmail.com',
                    password: '123456',
                    name: 'rifky'
                })
                .then(response => {
                    response.should.have.status(201);
                    response.body.should.be.an('object');
                    response.body.should.have.property('email');
                    response.body.email.should.equal('mrifky@gmail.com');
                    response.body.should.have.property('password');
                    response.body.password.should.not.equal('123456');
                    response.body.should.have.property('name');
                    response.body.name.should.equal('rifky');
                    done();
                })
                .catch(err => {
                    console.log(err)
                });
        });
    });
});
describe('fail', function () {
    it('should return an error message and status 500', function (done) {
        chai
            .request(app)
            .post('/user/register')
            .send({
                email: 'mrifky@gmaill.com',
                password: '123456',
                name: ''
            })
            .then(response => {
                response.should.have.status(500);
                response.body.should.have.property('errors');
                response.body.errors.should.have.property('email');
                response.body.errors.email.message.should.equal('Email has been used');
                response.body.errors.should.have.property('password');
                response.body.errors.password.message.should.equal('Password minimum length must be 6');
                response.body.errors.should.have.property('name');
                response.body.errors.name.message.should.equal('Name is required');
                done();
            })
            .catch(err => {
                console.log(err)
            });

    });
});
