App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Routes
App.Router.map(function() {
  this.resource('coffee', { path: '/' });
});

App.CoffeeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('coffee');
  }
});

// Models
App.Coffee = DS.Model.extend({
  bean: DS.attr('string'),
  price: DS.attr('string')
});

App.Coffee.FIXTURES = [
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
