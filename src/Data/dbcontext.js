const { MongoClient } = require('mongodb')
module.exports = async (stringDeConexao, banco) => {

    if (global.db) return global.db;

    const conn = await MongoClient.connect(stringDeConexao, {
        useUnifiedTopology: true
    });

    if (!conn) return new Error('Falha na conexão');

    global.db = await conn.db(banco);

    return global.db;

}