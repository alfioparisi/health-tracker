import {View} from 'backbone';
import Food from '../models/food';
import {data} from '../models/userData';
import responseList from '../collections/responseList';

const FormView = Backbone.View.extend({
  // The root element is the form.
  el: $('.form-view'),

  events: {
    // The change event will update the request.
    'change .form-search': 'setQuery',
    'change .form-min-cal': 'setMinCal',
    'change .form-max-cal': 'setMaxCal',
    // Send the request.
    'click .form-btn': 'fetchData',
    // Clear the list.
    'click .form-clear-all': 'clearAll'
  },

  initialize: function() {
    _.bindAll(this, 'fetchData', 'setQuery', 'setMinCal', 'setMaxCal', 'updateData', 'clearAll');
    this.input = $('.form-search');
    this.btn = $('.form-btn');
  },

  // When the input value changes, change the query in the model accordingly.
  setQuery: function(evt) {
    const value = evt.target.value;
    this.model.set({query: value});
  },

  setMinCal: function(evt) {
    const value = evt.target.value || 0;
    this.model.set({minCal: value});
  },

  setMaxCal: function(evt) {
    const value = evt.target.value || 400;
    this.model.set({maxCal: value});
  },

  updateData: function() {
    data.query = this.model.get('query');
    data.filters.nf_calories.from = this.model.get('minCal');
    data.filters.nf_calories.to = this.model.get('maxCal');
    // If the max cal are less than the min cal, make them equal.
    if (this.model.get('maxCal') < this.model.get('minCal')) {
      data.filters.nf_calories.to = this.model.get('minCal');
    }
  },

  // When the form is submitted, prevent page refresh and instead send the request.
  fetchData: function(evt) {
    evt.preventDefault();
    this.btn.toggleClass('is-loading');
    // Update the request with the user inputs.
    this.updateData();
    // Clear the list from the old results.
    responseList.reset();
    // Send.
    $.getJSON({
      type: "POST",
      async: true,
      url: "https://api.nutritionix.com/v1_1/search/",
      // The data object is within ../models/userData
      data: data
    }).done(response => {
      // Success function.
      // @param {object} : the response.

      // If the request doesn't yeld any result, let the user know.
      if (!response.hits.length) window.alert('No results for this search');

      // Loop through the response array, make a new model for each element of the
      // response, make a view for that model, update the HTML.
      // @param {object} : food returned by the request.
      // @param {number} : the index of the current iteration.
      response.hits.forEach(function(element, index) {
        // Make a new food model for each element of the response.
        let food = new Food();
        food.set({
          name: element.fields.item_name,
          brand: element.fields.brand_name,
          cal: element.fields.nf_calories,
          id: index
        });
        responseList.add(food);
      });
      this.btn.toggleClass('is-loading');
      // Clear the input field.
      this.input.val('');
      // If something goes wrong, let the user know.
    }).fail(error => window.alert(`Couldn't get results because of : ${error.statusText}`));
  },

  // Clear the list.
  clearAll: function() {
    responseList.reset();
  }

});

export default FormView;
