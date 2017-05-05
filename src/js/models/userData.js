import {Model} from 'backbone';
import nutritionix from '../key.js';

export const data = {
  "appId": nutritionix.appId,
  "appKey": nutritionix.appKey,
  "fields": [
    "item_name",
     "brand_name",
     "nf_calories"
   ],
  "offset": 0,
  "limit": 15,
  "sort": {
    "field": "nf_calories",
    "order": "desc"
  },
  "min_score": 0.5,
  "query": '',
  "filters": {
    "item_type": 1,
    "nf_calories": {
      "from": 0,
      "to": 400
    }
  }
};

const UserData = Backbone.Model.extend({
  defaults: {
    query: '',
    minCal: 0,
    maxCal: 400
  }

});

const userData = new UserData();

export default userData;
