import {View} from 'backbone';
import responseList from '../collections/responseList';
import added from '../collections/added';

const FoodView = Backbone.View.extend({
  // Make a new 'li' element.
  tagName: 'li',
  className: 'response-item',

  // Get the HTML for the template.
  template: _.template($("#response-template").html()),

  events: {
    // Add food to the second list.
    'click .response-btn-add': 'add'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'add');
    this.render();
  },

  render: function() {
    // Fill the template with the model attributes.
    // Fill the element with the template.
    this.$el.html(this.template(this.model.attributes));
  },

  // Add the food model to the second collection. Remove it from the first and also
  // remove the element from the first list.
  add: function() {
    added.add(this.model);
    // Here we're using Bacbone.remove()
    responseList.remove(this.model);
    // Here jQuery.remove()
    this.$el.remove();
  }

});

export default FoodView;
