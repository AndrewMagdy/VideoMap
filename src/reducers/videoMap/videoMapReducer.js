import {
  LOAD_VIDEOS_REQUEST,
  LOAD_VIDEOS_SUCCESS,
  LOAD_VIDEOS_ERROR
} from "../../actions/types";


const initialState = {
  pageObj: {},
  videosList: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

const videoMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VIDEOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: ""
      };
    }
    case LOAD_VIDEOS_SUCCESS: {
      const { items, ...pageObj } = action.payload.videosList;
      const isNextPage = action.payload.isNextPage;
      return {
        ...state,
        pageObj: pageObj,
        videosList: isNextPage ? [...state.videosList, ...items] : items,
        isLoading: false,
        isError: false,
        errorMessage: ""
      };
    }
    case LOAD_VIDEOS_ERROR: {
      return {
        ...state,
        videosList: {},
        isLoading: false,
        isError: true,
        errorMessage: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
};

export default videoMapReducer;
