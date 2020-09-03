module.exports = {
  Query: {
    getTeachers: (_, __, { dataSources }) =>
      dataSources.scheduleAPI.getTeachers(),
    getTeacherByName: (_, { name }, { dataSources }) =>
      dataSources.scheduleAPI.getTeacherByName({ name }),
    getGroups: (_, __, { dataSources }) =>
      dataSources.scheduleAPI.getGroups(),
    getGroupByName: (_, { name }, { dataSources }) =>
      dataSources.scheduleAPI.getGroupByName({ name }),
  }
};
