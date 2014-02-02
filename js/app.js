App = Ember.Application.create();

// Routes
App.Router.map(function() {
  this.resource('coffee', { path: '/' });
});

App.IndexRoute = Ember.Route.extend({
});

// Models
App.Coffee = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});