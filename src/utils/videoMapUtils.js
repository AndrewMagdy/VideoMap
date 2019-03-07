import Config from "react-native-config";

const apiEndPoint = Config.API_URL;
const apiKey = Config.API_KEY;
const locationRadius = "100km";
const maxResults = 10;

export const getVideosAPI = async (coordinate, pageToken) => {
  const coordinateStr = encodeURIComponent(
    `${coordinate.latitude},${coordinate.longitude}`
  );
  const getRequest = `${apiEndPoint}?part=snippet&location=${coordinateStr}&pageToken=${pageToken}&locationRadius=${locationRadius}&type=video&key=${apiKey}&maxResults=${maxResults}`;
  const response = await fetch(getRequest);
  const responseBody = await response.json();
  if (!response.ok) {
    throw responseBody.error;
  }
  return responseBody;
};
