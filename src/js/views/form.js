import {View} from 'backbone';
import Food from '../models/food';
import {data} from '../models/userData';
import responseList from '../collections/responseList';

const FormView = Backbone.View.extend({
  // The root element is the form.
  el: $('.form-view'),

  events: {
    'change .form-search': 'setQuery',
    'click .form-btn': 'fetchData'
  },

  initialize: function() {
    _.bindAll(this, 'fetchData', 'setQuery');
    this.input = $('.form-search');
  },

  // When the input value changes, change the query in the model accordiblgy.
  setQuery: function(evt) {
    let value = evt.target.value;
    // if (value === '') console.log('Please insert a valid food');
    // if (value.match(/\d/g)) {
    //   value = value.split('').filter(el => isNaN(Number(el))).join('');
    // }
    this.model.set({query: value})
  },

  // When the form is submitted, prevent page refresh and instead send the request.
  fetchData: function(evt) {
    evt.preventDefault();
    responseList.reset();
    data.query = this.model.get('query');
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
    }).fail(error => {
      // Fail function.
      // @param {object} : the error.

      console.log(error);
    });
  }

});

export default FormView;
