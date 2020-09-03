const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ScheduleAPI = require('./datasources/schedule');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    scheduleAPI: new ScheduleAPI()
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
