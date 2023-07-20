import mongoose from 'mongoose'
import 'dotenv/config'

import {ApolloServer} from 'apollo-server'

import resolvers from './resolvers/index'
import typeDefs from './defs/index'

async function startServer(){
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to mongoDB'))

    await apolloServer.listen(3000).then(() => console.log('Connected to Apollo Server'))
}

startServer()

