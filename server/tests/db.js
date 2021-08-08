const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

const mongod = new MongoMemoryServer();

// Connect to db
module.exports.connect = async () => {
    const uri = await mongod.getUri()
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    await mongood.connect(uri, mongooseOpts)
}

// Disconnect and close connection
module.exports.disconnect = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

// Clear db
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections
    for (key in collections) {
        await collections[key].deleteMany();
    }
}