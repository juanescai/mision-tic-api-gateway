const {gql} = require('apollo-server');
 const transactionsTypesDefs  = gql `
    type Transaction{
        id: String!
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int!
        date: String!
    }
    
    input transactionInput{
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int!
    }

    extend type Mutation {
        createTransaction(transaction: transactionInput!): Transaction!
    }
    extend type Query {
        transactionByUsername(username: String!): [Transaction]
    }
`;

 module.exports = transactionsTypesDefs;