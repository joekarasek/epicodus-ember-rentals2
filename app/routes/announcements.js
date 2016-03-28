import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    save3Announcements(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
