import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'button',
	click() {
		let model = this.get('model');
		model.incrementProperty('points');
		model.save();
	}
});
