import { combineReducers } from 'redux';
import videoMapReducer from './videoMap/videoMapReducer';

const rootReducer = combineReducers({
  videoMap: videoMapReducer,
});

export default rootReducer;
