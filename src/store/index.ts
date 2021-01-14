import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// todo: refactor this at the end of the project if needed
const configureStore = () => {
  const store = createStore(
    combineReducers({
      counter: () => ({
        value: 3
      })
    }),
    composeWithDevTools()
  );

  return store;
};

const store = configureStore();

export default store;
