import {Model} from 'backbone';

const Food = Backbone.Model.extend({
  defaults: {
    name: '',
    brand: '',
    cal: 0
  }

});

export default Food;
