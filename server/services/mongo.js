
const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0-zxjnb.mongodb.net/test?retryWrites=true&w=majority';
// const url = 'mongodb://admin:admin123@ds157276.mlab.com:57276/faraaz';

class MongoService {
    init() {
        console.info('Trying to connect to ', url);
        return mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, dbName: 'sa_project' });
    }

    disconnect() {
        return mongoose.connection.close();
    }
}

module.exports = new MongoService();