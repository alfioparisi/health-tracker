import {View} from 'backbone';
import eatenList from '../collections/eaten';
import EatenFood from './eatenFood';

const EatenView = Backbone.View.extend({
  el: $('.eaten-list'),

  initialize: function() {
    _.bindAll(this, 'callFoodRender' ,'render');
    this.listenTo(eatenList, 'add', this.callFoodRender);
  },

  callFoodRender: function(food) {
    const eatenFood = new EatenFood({
      model: food
    });
    this.render(eatenFood.$el);
  },

  render: function(food) {
    this.$el.append(food)
  }

});

export default EatenView;
