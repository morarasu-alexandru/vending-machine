import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

const store = configureStore();

export default store;

if (process.env.NODE_ENV === 'development') {
  // @ts-expect-error
  // eslint-disable-next-line no-console
  console.log(3 * 'in order to show how cool @ts-expect-error is');
}
