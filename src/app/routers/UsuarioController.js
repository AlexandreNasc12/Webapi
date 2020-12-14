const { MongoClient } = require('mongodb')

module.exports = app => {
    app.get('/usuario', async (req, res, next) => {

        try {
            const db = await connect();
            res.json(await db.collection('Usuario').find().toArray())
        }
        catch (ex) {
            console.log(ex)
            res.status(400).json({ erro: `${ex}` });
        }
    })

    async function connect() {
        if (global.db) return global.db;
    
        const conn = await MongoClient.connect(dbconfig.conectionString, {
            useUnifiedTopology: true
        });
    
        if (!conn) return new Error('Falha na conexão');
    
        global.db = await conn.db(dbconfig.db);

        return global.db;
    }
}