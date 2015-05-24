import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.find('post').then((posts) => {
			return Ember.ArrayProxy.extend({
				arrangedContent: Ember.computed.sort('content', 'sortProperties'),
				sortProperties: ['points:desc']
			}).create({
				content: posts
			});
		});

	}
});
