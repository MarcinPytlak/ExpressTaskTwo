const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts/performer/:performer' ,async() => {

    beforeEach(async () => {
        const testConcertOne = new Concert({
            _id: '5d9f1159f81ce8d1ef2bee48',
            id: 1,
            performer: 'Marcin Pytlak',
            genre: 'Rock',
            price: 500,
            day: 3,
            image: 'image',
        });
        await testConcertOne.save();

        const testConcertTwo = new Concert({
            _id: '5d9f1159f81238d1ef2bee90',
            id: 2,
            performer: 'Edyta Pytlak',
            genre: 'Disco-Polo',
            price: 53,
            day: 2,
            image: 'image',
        });
        await testConcertTwo.save();

        const testConcertThree = new Concert({
            _id: '5d9f1159f81238d1ef2be450',
            id: 3,
            performer: 'Piotr Pytlak',
            genre: 'Techno',
            price: 60,
            day: 3,
            image: 'image',
        });
        await testConcertThree.save();

        const testConcertFour = new Concert({
            _id: '5d9f1159f81238d1ef2bee60',
            id: 1,
            performer: 'Marcin Pytlak',
            genre: 'Rock',
            price: 600,
            day: 2,
            image: 'image',
        });
        await testConcertFour.save();

    });

    it('should return concert regards preformer', async ()=> {
        const res = await request(server).get('/api/concerts/performer/Piotr Pytlak');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });
    it('should return concerts between min and max price', async() => {
        const res = await request(server).get('/api/concerts/price/30/300');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2);
    });
    it('should return concert with provided genre', async() => {
        const res = await request(server).get('/api/concerts/genre/Techno');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
    });
    it('should return concert with provided day', async() => {
        const res = await request(server).get('/api/concerts/day/2');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2);
    });
    afterEach(async () => {
        await Concert.deleteMany();
    });

    
});