import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'user-posts',
  ajax: Ember.inject.service(),
  model(params) {
    return this.get('ajax').request('https://jsonplaceholder.typicode.com/posts?userId=' + params.userId);
  },
});
