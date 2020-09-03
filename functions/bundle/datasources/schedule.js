const { RESTDataSource } = require('apollo-datasource-rest');

class ScheduleAPI extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://rksi.ru/export/schedule.php';
  };
  async getTeachers() {
    const response = JSON.parse(await this.get('', {
      type: 'teachers'
    }));
    return Array.isArray(response)
      ? response.map((name, index) => ({
          id: index,
          name,
        }))
      : [];
  };
  async getTeacherByName({ name }) {
    const response = JSON.parse(await this.get('', {
      type: 'teachers'
    }));

    const index = response.indexOf(name);

    return Array.isArray(response)
      ? this.teacherReducer(index)
      : {};
  };
  async teacherReducer(index) {
    const teacher = JSON.parse(await this.get('', {
      type: 'teacher',
      item: index,
    }));

    return {
      id: index,
      name: teacher[0].schedule[0].tt_teacher,
      schedule: teacher.map(day => ({
        date: day.date,
        schedule: day.schedule.map(lesson => ({
          id: lesson.tt_id,
          subject: lesson.tt_sub,
          group: lesson.tt_gr,
          start: lesson.tt_start,
          end: lesson.tt_end,
          cabinet: lesson.tt_cab
        }))
      }))
    }
  }
  async getGroups() {
    const response = JSON.parse(await this.get('', {
      type: 'groups'
    }));
    return Array.isArray(response)
      ? response.map((name, index) => ({
          id: index,
          name,
        }))
      : [];
  };
  async getGroupByName({ name }) {
    const response = JSON.parse(await this.get('', {
      type: 'groups'
    }));

    const index = response.indexOf(name);

    return Array.isArray(response)
      ? this.groupReducer(index)
      : {};
  };
  async groupReducer(index) {
    const group = JSON.parse(await this.get('', {
      type: 'group',
      item: index,
    }));
    return {
      id: index,
      name: group[0].schedule[0].tt_gr,
      schedule: group.map(day => ({
        date: day.date,
        schedule: day.schedule.map(lesson => ({
          id: lesson.tt_id,
          subject: lesson.tt_sub,
          start: lesson.tt_start,
          end: lesson.tt_end,
          teacher: lesson.tt_teacher,
          cabinet: lesson.tt_cab
        }))
      }))
    }
  }
};

module.exports = ScheduleAPI;
