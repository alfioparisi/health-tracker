import {View} from 'backbone';
import added from '../collections/added';
import eatenList from '../collections/eaten';

const AddedFood = Backbone.View.extend({
  tagName: 'li',
  className: 'added-item',

  template: _.template($('#added-template').html()),

  events: {
    'click .added-btn-eat': 'eat',
    'click .added-btn-rmv': 'removeOne'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'eat', 'removeOne');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  // Add to the third list, remove from the second one.
  eat: function() {
    eatenList.add(this.model);
    this.removeOne();
  },

  removeOne: function() {
    // Use Backbone.remove() to remove the model from the collection.
    added.remove(this.model);
    // Use jQuery.remove() to remove the element from the DOM.
    this.$el.remove();
  }

});

export default AddedFood;
