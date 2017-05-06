import {View} from 'backbone';
import FoodView from './food';
import responseList from '../collections/responseList';

const ResponseView = Backbone.View.extend({
  el: $('.response-list'),

  initialize: function() {
    _.bindAll(this, 'callFoodRender', 'render', 'clearAll');
    // Update the list when the collection updates.
    this.listenTo(responseList, 'add', this.callFoodRender);
    this.listenTo(responseList, 'reset', this.clearAll);
  },

  // Make a new foodView with the model you get from the 'add' event.
  callFoodRender: function(food) {
    const foodView = new FoodView({
      model: food
    });
    this.render(foodView.$el);
  },

  // Append the new li.
  render: function(food) {
    this.$el.append(food);
  },

  // Clear the list.
  clearAll: function() {
    this.$el.html('');
  }

});

export default ResponseView;
