import {Collection} from 'backbone';
import Food from '../views/food';

// Collection containing the food 'eaten' by the user. It will be saved in the
// local storage.
const EatenList = Backbone.Collection.extend({
  model: Food

  // TODO: insert localStorage.

});

const eatenList = new EatenList();

export default eatenList;
