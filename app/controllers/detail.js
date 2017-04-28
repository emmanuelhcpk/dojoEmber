import Ember from 'ember';
var mainUrl = 'https://jsonplaceholder.typicode.com'

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    refreshPost: function (id) {
      var thiz = this;
      this.get('ajax').request(mainUrl+'/posts/' + id).then(function success(data) {
        thiz.set('model', data);
      }, function error(err) {
        console.log('error updating', err)
      });
    },
    savePost: function (currentPost) {
      var thiz = this;
      this.get('ajax').request(mainUrl+'/posts/' + currentPost.id, {
        method: 'PUT',
        data: currentPost
      }).then(function success(data) {
          alert('Accion terminada')
          thiz.transitionToRoute('list');
        }, function error(err) {
        });
    },
    deletePost(id) {
      var thiz = this;
      this.get('ajax').request(mainUrl+'/posts/' + id,{
        method: 'DELETE'
      }).then(function success(data) {
          alert('Accion terminada')
          thiz.transitionToRoute('list');
        }, function error(err) {
        });
    }
  }
});
