import {View} from 'backbone';
import added from '../collections/added';
import AddedFood from './addedFood';

const AddedView = Backbone.View.extend({
  el: $('.added-list'),

  initialize: function() {
    _.bindAll(this, 'callFoodRender', 'render');
    this.listenTo(added, 'add', this.callFoodRender);
  },

  callFoodRender: function(food) {
    const addedFood = new AddedFood({
      model: food
    });
    this.render(addedFood.$el);
  },

  render: function(food) {
    this.$el.append(food);
  }

});

export default AddedView;
