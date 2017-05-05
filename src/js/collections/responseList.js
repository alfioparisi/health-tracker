import {Collection} from 'backbone';
import Food from '../models/food';

const ResponseList = Backbone.Collection.extend({
  model: Food

});

const responseList = new ResponseList();

export default responseList;
