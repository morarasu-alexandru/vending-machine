import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// todo: refactor this at the end of the project if needed
const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

const store = configureStore();

export default store;

if (process.env.NODE_ENV === 'development') {
  // @ts-expect-error
  // eslint-disable-next-line no-console
  console.log(3 * 'I want this console log in order to check @ts-expect-error');
}
