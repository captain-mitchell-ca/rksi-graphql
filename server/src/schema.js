const { gql } = require('apollo-server');

const typeDefs = gql`
  type Day {
    date: String!
    schedule: [Lesson]!
  }
  type Lesson {
    id: ID!
    subject: String!
    group: Group!
    start: String!
    end: String!
    teacher: Teacher!
    cabinet: String!
  }
  type Group {
    name: String!
    schedule: [Day]!
  }
  type Teacher {
    name: String!
    schedule: [Day]!
  }
  type Query {
    teachers: [Teacher]
    teacher: Teacher
    groups: [Group]
    group: Group
  }
`;

module.exports = typeDefs;