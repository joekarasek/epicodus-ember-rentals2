import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },
    save1Announcements() {
      var params = {
        image: this.get('image'),
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save2Announcements', params);
    }
  }
});
