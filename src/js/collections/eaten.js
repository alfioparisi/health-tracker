import {Collection} from 'backbone';
import Food from '../views/food';
import {LocalStorage} from 'backbone.localstorage';

// Collection containing the food 'eaten' by the user. It will be saved in the
// local storage.
const EatenList = Backbone.Collection.extend({
  model: Food,

  localStorage: new LocalStorage('eaten')

});

const eatenList = new EatenList();

export default eatenList;
