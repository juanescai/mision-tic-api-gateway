const transactionResolver = {
    Query: {
        transactionByUsername: async(_,{username},{dataSources,userIdToken}) =>{
            usernameToken = (await dataSources.AuthAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.AccountAPI.transactionByUsername(username)
            else
                return null
        }
    },
    Mutation: {
        createTransaction: async (_,{transaction},{dataSources,userIdToken}) => {
            usernameToken = (await dataSources.AuthAPI.getUser(userIdToken)).username
            if (transaction.usernameOrigin == usernameToken)
                return dataSources.AccountAPI.createTransaction(transaction)
            else
                return null
        }
    }
};

module.exports = transactionResolver;