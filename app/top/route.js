import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.find('post').then((posts) => {
			return posts.sortBy('points').reverseObjects();
		});
	}
});
