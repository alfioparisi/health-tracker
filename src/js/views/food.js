import {View} from 'backbone';
import responseList from '../collections/responseList';
import added from '../collections/added';

const FoodView = Backbone.View.extend({
  tagName: 'li',
  className: 'response-item',

  template: _.template($("#response-template").html()),

  events: {
    'click .response-btn-add': 'add'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'add');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  add: function() {
    added.add(this.model);
    responseList.remove(this.model);
    this.$el.remove();
  }

});

export default FoodView;
