import {View} from 'backbone';
import added from '../collections/added';
import eatenList from '../collections/eaten';

const CalView = Backbone.View.extend({
  el: $('.cal-container'),

  initialize: function() {
    this.calEl = $('.cal-amount');
    this.dayEl = $('.day-amount');
    this.calAmount = 0;
    this.dayAmount = 0;
    _.bindAll(this, 'addCal', 'decCal', 'addDaily');
    this.listenTo(added, 'add', this.addCal);
    this.listenTo(added, 'remove', this.decCal);
    this.listenTo(eatenList, 'add', this.addDaily);
  },

  addCal: function(food) {
    this.calAmount += food.attributes.cal;
    this.calEl.html(`Cal : ${this.calAmount}`);
  },

  decCal: function(food) {
    this.calAmount -= food.attributes.cal;
    this.calEl.html(`Cal : ${this.calAmount}`);
  },

  addDaily: function(food) {
    this.dayAmount += food.attributes.cal;
    this.dayEl.html(`Today's : ${this.dayAmount}`);
  }

});

export default CalView;
