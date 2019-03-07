import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const configureStore = initialState => {
  const middleware = applyMiddleware(thunk);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
