const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Day {
    date: String!
    schedule: [Lesson]!
  }
  type Lesson {
    id: ID!
    subject: String!
    group: String!
    start: String!
    end: String!
    teacher: String!
    cabinet: String!
  }
  type Group {
    id: ID!
    name: String!
    schedule: [Day]
  }
  type Teacher {
    id: ID!
    name: String!
    schedule: [Day]
  }
  type Query {
    getTeachers: [Teacher]
    getTeacherByName(name: String!): Teacher
    getGroups: [Group]
    getGroupByName(name: String!): Group
  }
`;

module.exports = typeDefs;