import {View} from 'backbone';
import added from '../collections/added';
import FoodView from './food';

const AddedView = Backbone.View.extend({
  el: $('.added-list'),

  initialize: function() {
    _.bindAll(this, 'callFoodRender', 'render');
    this.listenTo(added, 'add', this.callFoodRender);
  },

  callFoodRender: function(food) {
    const foodView = new FoodView({
      model: food
    });
    this.render(foodView.$el);
  },

  render: function(food) {
    this.$el.append(food)
  }

});

export default AddedView;
