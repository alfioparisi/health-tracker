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
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  add: function(evt) {
    const chosenOne = responseList.find(food => food.id === $(evt.target).data('id'))
    added.add(chosenOne);
    responseList.remove(chosenOne);
  }

});

export default FoodView;
