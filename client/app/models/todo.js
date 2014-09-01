import DS from 'ember-data';

var Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});


Todo.reopenClass({
  FIXTURES: [
      {
          id: 1,
          title: "Go Skydiving",
          isCompleted: false
      },
      {
          id: 2,
          title: "Master Sails",
          isCompleted: true
      },
      {
          id: 3,
          title: "Save the world (with Ember)",
          isCompleted: false
      }
  ]
});

export default Todo;
