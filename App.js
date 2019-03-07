import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import VideoMapContainer from "./src/containers/videoMap/videoMapContainer";

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <VideoMapContainer />
  </Provider>
);

export default app;
