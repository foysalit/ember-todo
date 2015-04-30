import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		createTodo: function (title) {
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			this.set('title', '');
			todo.save();
		}
	}
});
