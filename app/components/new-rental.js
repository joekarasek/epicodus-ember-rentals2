
import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    save1() { //This is the second step in our Action-up that saves the parameters below. It came from the button click in the new-rental.hbs.
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      };
      this.set('addNewRental', false),
      this.sendAction('save2', params); //This sends our parameters up to the next level which is our template (in this case, index.hbs)
    }
  }
});
