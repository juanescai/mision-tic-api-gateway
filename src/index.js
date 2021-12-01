const {ApolloServer, ApolloError} = require('apollo-server');
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const AuthAPI = require('./dataSources/auth_api')
const AccountAPI = require('./dataSources/account_api')
const Authentication = require('./utils/authentication')

const server = new ApolloServer({
    cors: false,
    context: Authentication,
    typeDefs,
    resolvers,
    dataSources: () =>({
        AccountAPI: new AccountAPI(),
        AuthAPI: new AuthAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
    });
    