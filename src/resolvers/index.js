const accountResolver = require('./account_resolver');
const transactionResolver = require('./transaction_resolver');
const usersResolvers = require('./auth_resolver');
const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver,transactionResolver,usersResolvers);

module.exports = resolvers;