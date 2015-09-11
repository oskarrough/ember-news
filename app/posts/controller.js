import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sort'],
  sort: ['points:desc'],
  posts: Ember.computed.sort('model', 'sort')

  // recentPostsSorting: ['created:desc'],
  // actions: {
  //   sortBy(property) {
	// 		// let posts = this.get('model');
  //     this.set('sort', [property]);
  //
	// 		// posts.setProperties({
	// 		// 	sortAscending: !posts.get('sortAscending'),
	// 		// 	sortProperties: [property]
	// 		// });
  //   }
  // }
});
