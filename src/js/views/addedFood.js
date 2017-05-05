import {View} from 'backbone';
import added from '../collections/added';

const AddedFood = Backbone.View.extend({
  tagName: 'li',
  className: 'added-item',

  template: _.template($("#added-template").html()),

  events: {
    'click .added-btn-eat': 'eat'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'eat');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  eat: function(evt) {
    console.log('yo');
  }

});

export default AddedFood;
