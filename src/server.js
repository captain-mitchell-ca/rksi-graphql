const { ApolloServer } = require('apollo-server');
const { ApolloServer: ApolloServerLambda } = require('apollo-server-lambda');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ScheduleAPI = require('./datasources/schedule');

function createLambdaServer () {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => ({
      scheduleAPI: new ScheduleAPI()
    }),
  })
}

function createLocalServer () {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => ({
      scheduleAPI: new ScheduleAPI()
    }),
  });
}

module.exports = { createLambdaServer, createLocalServer };
