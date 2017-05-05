import {Model} from 'backbone';
import nutritionix from '../key.js';

const UserData = Backbone.Model.extend({
  defaults: {
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
  }

});
