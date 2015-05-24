import Ember from 'ember';

export default Ember.Component.extend({
	click() {
		let model = this.get('attrs.model');
		model.incrementProperty('points');
		model.save();
	}
});
