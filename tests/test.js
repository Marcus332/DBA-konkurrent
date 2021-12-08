//Test af 4. Funktionelle krav - Login
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()

chai.use(chaiHttp);

describe('login', () => {
    describe('POST /login', () => {
        it('should return a 200 response if the user is logged in', function(done){
            chai
            .request('http://localhost:8000/users')
            .post("/login")
            .send({email:"random.jeg@gmail.com", password:"123456789"})
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
            describe('login', () => {
                describe('POST /login', () => {
            it('should return a 404 response if the user does not exist in the database', function(done){
                chai
                .request('http://localhost:8000/users')
                .post("/login")
                .send({email:"lebron@james.com", password:"damn"})
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })})})
        });
    })
    })})