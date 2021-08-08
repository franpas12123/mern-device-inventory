import { axios } from "axios";

const db = require('./db')

beforeAll(async () => await db.connect())

afterEach(async () => await db.clearDatabase())

afterAll(async () => await db.disconnect())

describe('First Group Of Tests', () => {
    it('First Test', async done => {
        const result = await numberFunc(10)
        expect(result.word).toBe("ten")
        expect(result.number).toBeGreaterThan(10)
        done()
    })
    it('Second Test', async done => {
        const result = await numberFunc()
        expect(result).toBeNull()
        done()
    })
})

// function checkHealth() {
//     const req = axios.get(`${BASE_URL}/healt`)
//     console.log(res)
// }
// // test('Connected to db', async () => {
// //     expect.assertions(1)
// //     const result = await 
// // })

// const { MongoClient } = require('mongodb');
// require('dotenv').config()

// const URI = process.env.ATLAS_URI
// const DB_NAME = process.env.DB_NAME

// describe('insert', () => {
//     let connection;
//     let db;

//     beforeAll(async () => {
//         connection = await MongoClient.connect(URI, {
//             useNewUrlParser: true,
//         });
//         db = await connection.db(URI);
//     });

//     afterAll(async () => {
//         await connection.close();
//         await db.close();
//     });

//     // it('should insert a doc into collection', async () => {
//     //     const users = db.collection('users');

//     //     const mockUser = { _id: 'some-user-id', name: 'John' };
//     //     await users.insertOne(mockUser);

//     //     const insertedUser = await users.findOne({ _id: 'some-user-id' });
//     //     expect(insertedUser).toEqual(mockUser);
//     // });

//     it('should get all devices', async () => {
//         const users = db.collection('users');

//         const mockUser = { _id: 'some-user-id', name: 'John' };
//         await users.insertOne(mockUser);

//         const insertedUser = await users.findOne({ _id: 'some-user-id' });
//         expect(insertedUser).toEqual(mockUser);
//     });
// });