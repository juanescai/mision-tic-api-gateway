const accountTypeDefs = require('./account_type_defs');
const transactionTypeDefs = require('./transaction_type_defs');
const authTypeDefs = require('./auth_type_defs');

const schemaArrays = [accountTypeDefs,transactionTypeDefs,authTypeDefs];

module.exports = schemaArrays;