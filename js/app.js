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

// Controllers
App.CoffeeItemController = Ember.ObjectController.extend({    
  isEditing: false,

  actions: {
    editCoffee: function() {
      this.toggleProperty('isEditing');
    },

    deleteCoffee: function() {
      var coffee = this.get('model');
      coffee.deleteRecord();
      coffee.save();
    }
  }
});

App.CoffeeController = Ember.ArrayController.extend({
  itemController: 'coffeeItem',

  actions: {
    createCoffee: function() {
      // Get the bean name
      var bean = this.get('newBean');
      if (!bean.trim()) { return; }

      // Get the price
      var price = this.get('newPrice');
      if (!price.trim()) { return; }

      // Create the new coffee model
      var coffee = this.store.createRecord('coffee', {
        bean: bean,
        price: price
      });

      // Clear the text fields
      this.set('newBean', '');
      this.set('newPrice', '');

      // Save the new model
      coffee.save();
    }
  }
});

// Creating Edit View
App.EditCoffeeView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-coffee', App.EditCoffeeView);