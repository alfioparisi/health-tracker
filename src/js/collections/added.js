import {Collection} from 'backbone';
import Food from '../models/food';

const Added = Backbone.Collection.extend({
  model: Food

});

const added = new Added();

export default added;
