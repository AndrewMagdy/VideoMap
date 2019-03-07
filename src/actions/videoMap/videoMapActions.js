import { getVideosAPI } from "../../utils/videoMapUtils";
import {
  LOAD_VIDEOS_REQUEST,
  LOAD_VIDEOS_SUCCESS,
  LOAD_VIDEOS_ERROR
} from "../types";

const loadVideosRequest = () => ({
  type: LOAD_VIDEOS_REQUEST
});

const loadVideosSuccess = (videosList, isNextPage) => ({
  type: LOAD_VIDEOS_SUCCESS,
  payload: { videosList, isNextPage }
});

const loadVideosError = error => ({
  type: LOAD_VIDEOS_ERROR,
  payload: { error: error.message }
});

export const loadVideos = (coordinate, pageToken = "") => async dispatch => {
  dispatch(loadVideosRequest());
  try {
    const isNextPage = pageToken === "" ? false : true;
    const loadedVideos = await getVideosAPI(coordinate, pageToken);
    return dispatch(loadVideosSuccess(loadedVideos, isNextPage));
  } catch (error) {
    return dispatch(loadVideosError(error));
  }
};
