import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		login: function(){
			this.store.queryRecord('user', {
				name:this.controller.get('name')
			})
			.then((user) => {
				this.controllerFor('application').set('user',user);
				this.transitionTo('notebooks');
			});
		}
	}
});

