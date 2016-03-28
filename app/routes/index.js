import Ember from 'ember';

export default Ember.Route.extend({
  model() { // Model hook. This returns our array, and makes it available to the templates and components that correspond to that route. In this case, that's the index.hbs.
    return this.store.findAll('rental');
  },
});
