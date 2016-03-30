import Ember from 'ember';

export default Ember.Route.extend({
  model() { // Model hook. This returns our array, and makes it available to the templates and components that correspond to that route. In this case, that's the index.hbs.
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },
  actions: {
    save3(params) { //Now we have a variable from our template (save3 of index.hbs) and params contains the contents of the form from our new-rental.js.
      var newRental = this.store.createRecord('rental', params);
      newRental.save(); //This sends the new rental to Firebase and stores it there. Fin.
      this.transitionTo('index');
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
