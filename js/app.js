App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Routes
App.Router.map(function() {
  this.resource('coffee', { path: '/' });
});

App.IndexRoute = Ember.Route.extend({
});

// Models
App.Coffee = DS.Model.extend({
  bean: DS.attr('string'),
  price: DS.attr('string')
});

App.Coffee.Fixtures = [
  {
    id: 1,
    bean: 'Espresso Torro',
    price: '$17.75'
  },
  {
    id: 2,
    bean: 'Sulawesi Toarco AA Tana Toraja',
    price: '$18.75'
  },
  {
    id: 3,
    bean: '100% Estate Kona',
    price: '$39.75'
  }, 
];
