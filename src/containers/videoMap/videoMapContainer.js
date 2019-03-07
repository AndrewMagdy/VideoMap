import { connect } from "react-redux";
import VideoMapComponent from "../../components/videoMap/videoMapComponent";
import { loadVideos } from "../../actions/videoMap/videoMapActions";

const mapStateToProps = state => ({
  videosList: state.videoMap.videosList,
  pageObj: state.videoMap.pageObj,
  isLoading: state.videoMap.isLoading,
  isError: state.videoMap.isError,
  errorMessage: state.videoMap.errorMessage
});

const mapDispatchToProps = dispatch => ({
  loadVideos: (cooridnate, pageToken) =>
    dispatch(loadVideos(cooridnate, pageToken))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoMapComponent);
