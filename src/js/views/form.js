import {View} from 'backbone';
import Food from '../models/food';
import {data} from '../models/userData';
import responseList from '../collections/responseList';

const FormView = Backbone.View.extend({
  // The root element is the form.
  el: $('.form-view'),

  events: {
    'change .form-search': 'setQuery',
    'change .form-min-cal': 'setMinCal',
    'change .form-max-cal': 'setMaxCal',
    'click .form-btn': 'fetchData'
  },

  initialize: function() {
    _.bindAll(this, 'fetchData', 'setQuery', 'setMinCal', 'setMaxCal');
    this.input = $('.form-search');
  },

  // When the input value changes, change the query in the model accordiblgy.
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

  // When the form is submitted, prevent page refresh and instead send the request.
  fetchData: function(evt) {
    evt.preventDefault();
    responseList.reset();
    data.query = this.model.get('query');
    data.filters.nf_calories.from = this.model.get('minCal');
    data.filters.nf_calories.to = this.model.get('maxCal');
    if (this.model.get('maxCal') < this.model.get('minCal')) {
      data.filters.nf_calories.to = this.model.get('minCal');
    }
    $.getJSON({
      type: "POST",
      async: true,
      url: "https://api.nutritionix.com/v1_1/search/",
      data: data
    }).done(response => {
      // Success function.
      // @param {object} : the response.

      // Clear the result list in case this is not the first request.

      // If the request doesn't yeld any result, let the user know.

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
        // Make a new food view filled with the food model.
        // Update the HTML.

      });
      // Clear the input field.
      this.input.val('');
    }).fail(error => window.alert(`Couldn't get results because of : ${error.statusText}`));
  }

});

export default FormView;
