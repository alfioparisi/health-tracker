import FormView from './views/form';
import userData from './models/userData';
import ResponseView from './views/responseList';
import AddedView from './views/added';
import EatenView from './views/eaten';

const formView = new FormView({
  model: userData
});

const responseView = new ResponseView();

const addedView = new AddedView();

const eatenView = new EatenView();
