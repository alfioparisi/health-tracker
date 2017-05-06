import {View} from 'backbone';

const EatenFood = Backbone.View.extend({
  tagName: 'li',
  className: 'eaten-item',

  template: _.template($('#eaten-template').html()),

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});

export default EatenFood;
