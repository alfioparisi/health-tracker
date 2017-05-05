import FormView from './views/form';
import userData from './models/userData';
import ResponseView from './views/responseList';

const formView = new FormView({
  model: userData
});

const responseView = new ResponseView();
