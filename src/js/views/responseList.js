import {View} from 'backbone';
import { _ } from 'underscore';
import FoodView from './food';
import responseList from '../collections/responseList';

const ResponseView = Backbone.View.extend({
  el: $('.response-list'),

  initialize: function() {
    _.bindAll(this, 'callFoodRender', 'render', 'clearAll');
    this.listenTo(responseList, 'add', this.callFoodRender);
    this.listenTo(responseList, 'reset', this.clearAll);
  },

  callFoodRender: function(food) {
    const foodView = new FoodView({
      model: food
    });
    this.render(foodView.$el);
  },

  render: function(food) {
    this.$el.append(food);
  },

  clearAll: function() {
    this.$el.html('');
  }

});

export default ResponseView;
