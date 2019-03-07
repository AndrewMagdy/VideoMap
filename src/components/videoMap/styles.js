import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  mapContainer: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  videosContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  videoItem: {
    flexDirection: "row"
  },
  videoImage: {
    width: 120,
    height: 90,
    marginRight: "1%"
  },
  videoTitle: {
    fontWeight: "bold"
  }
});
