import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		addNew:function(){
			var user = this.store.createRecord('user', {
				name: this.controller.get('name')
			});
			user.save().then( () => {
				let name = this.controller.get('name');
				this.controller.set('message', 'A new user with the name <'+name+'> was added!')
				this.controller.set('name', null);
			},
			function(){
				alert('save failed');
			});
		}
	}
});
