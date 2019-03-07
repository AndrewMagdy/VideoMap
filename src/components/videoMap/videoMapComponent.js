import React from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Alert,
  Linking
} from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";

const youtubeUrl = "https://www.youtube.com/watch?v=";

class VideoMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCoordinate: null
    };
  }

  onMapPress = evt => {
    const { loadVideos } = this.props;
    const coordinate = evt.nativeEvent.coordinate;
    loadVideos(coordinate);
    this.setState({
      currCoordinate: coordinate,
      onEndReachedCalledDuringMomentum: true
    });
    if (this.flatListRef) {
      this.flatListRef.scrollToIndex({ animated: true, index: 0 });
    }
  };

  renderMarker = () => (
    <Marker coordinate={this.state.currCoordinate}>
      <Callout>
        <View>
          <Text>WIP</Text>
        </View>
      </Callout>
    </Marker>
  );

  renderError = () =>
    Alert.alert("Error", this.props.errorMessage, [{ text: "OK" }], {
      cancelable: false
    });

  renderLoading = () => (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" />
    </View>
  );

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.videoItem}
      onPress={() => Linking.openURL(`${youtubeUrl}${item.id.videoId}`)}
    >
      <Image
        style={styles.videoImage}
        source={{ uri: item.snippet.thumbnails.high.url }}
      />
      <View>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={3}
          ellipsizeMode={"clip"}
          style={styles.videoTitle}
        >
          {item.snippet.title}
        </Text>
        <Text>{item.snippet.channelTitle}</Text>
      </View>
    </TouchableOpacity>
  );

  _onEndReached = () => {
    const { isLoading, pageObj, loadVideos } = this.props;
    if (
      !isLoading &&
      !this.state.onEndReachedCalledDuringMomentum &&
      pageObj.nextPageToken
    ) {
      loadVideos(this.state.currCoordinate, pageObj.nextPageToken);
      this.setState({ onEndReachedCalledDuringMomentum: true });
    }
  };

  render() {
    const { isLoading, isError, videosList } = this.props;
    return (
      <View style={styles.container}>
        {isError && this.renderError()}

        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            onPress={this.onMapPress}
            onLongPress={this.onMapPress}
          >
            {this.state.currCoordinate && this.renderMarker()}
          </MapView>
        </View>
        <View style={styles.videosContainer}>
          {isLoading && this.renderLoading()}
          {videosList.length > 0 ? (
            <FlatList
              data={videosList}
              ref={ref => {
                this.flatListRef = ref;
              }}
              keyExtractor={item => item.id.videoId}
              renderItem={this._renderItem}
              onEndReachedThreshold={0.1}
              onEndReached={this._onEndReached}
              onMomentumScrollBegin={() => {
                this.setState({ onEndReachedCalledDuringMomentum: false });
              }}
            />
          ) : (
            <Text>Nothing Here</Text>
          )}
        </View>
      </View>
    );
  }
}

export default VideoMapComponent;
