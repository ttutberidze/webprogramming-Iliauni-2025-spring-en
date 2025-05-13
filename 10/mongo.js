const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://iliauni:iliauni@cluster0.2xzq5jw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const main = async () => {
    await client.connect()
    const db = await client.db('task-management')
    const users = await db.collection('users')
    const user = await users.insertOne({
        address: {
            city: 'String'
        }
    })
    console.log(user)
}

main()