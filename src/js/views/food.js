import {View} from 'backbone';
import { _ } from 'underscore';

const FoodView = Backbone.View.extend({
  tagName: 'li',
  className: 'response-item',

  template: _.template($("#response-template").html()),

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});

export default FoodView;
