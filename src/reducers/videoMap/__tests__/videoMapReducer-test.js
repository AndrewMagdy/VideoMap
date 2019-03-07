import reducer from "../videoMapReducer";
import {
  LOAD_VIDEOS_REQUEST,
  LOAD_VIDEOS_SUCCESS,
  LOAD_VIDEOS_ERROR
} from "../../../actions/types";

describe("VideoMap Reducer", () => {
  const payload1 = {
    videosList: {
      kind: "youtube#searchListResponse",
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/WwqdgSNUDfraUcjFMGIwQCAMjjk"',
      nextPageToken: "CAYQAA",
      prevPageToken: "CAQQAQ",
      regionCode: "EG",
      pageInfo: { totalResults: 34528, resultsPerPage: 2 },
      items: [
        {
          kind: "youtube#searchResult",
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ERlqJ63Coaw1WbWSFr3lYWjCSQM"',
          id: { kind: "youtube#video", videoId: "j8ZNl_rUvy8" },
          snippet: {
            publishedAt: "2018-04-21T17:43:48.000Z",
            channelId: "UCGOIkXwLo74MQk57RfGCDcg",
            title: "Symphony of the Seas Balcony Stateroom tour",
            description:
              "A very quick tour of our Balcony Stateroom on the brand new Symphony of the Seas. This is the first public sailing.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/j8ZNl_rUvy8/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/j8ZNl_rUvy8/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/j8ZNl_rUvy8/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "Warren Gibson",
            liveBroadcastContent: "none"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/UV7lx0bJMHSz0U6LusgN8-YNAVg"',
          id: { kind: "youtube#video", videoId: "lbDhgLwBqaw" },
          snippet: {
            publishedAt: "2019-02-24T17:09:54.000Z",
            channelId: "UCk3eWT8H_Hyon__NqbiNqUg",
            title:
              "Nokia 4.2 Hindi Quick Review, Features Comparison #GTUMWC19",
            description:
              "Nokia 4.2, the company offers a device with a 5.7-inch HD display, premium design with a glass back, and much more. Based on the Snapdragon 439 processor ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/lbDhgLwBqaw/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/lbDhgLwBqaw/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/lbDhgLwBqaw/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "GadgetsToUse",
            liveBroadcastContent: "none"
          }
        }
      ]
    },
    isNextPage: false
  };

  const prevState = {
    pageObj: {},
    videosList: [
      {
        kind: "youtube#searchResult",
        etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/UV7lx0bJMHSz0U6LusgN8-YNAVg"',
        id: { kind: "youtube#video", videoId: "lbDhgLwBqaw" },
        snippet: {
          publishedAt: "2019-02-24T17:09:54.000Z",
          channelId: "UCk3eWT8H_Hyon__NqbiNqUg",
          title: "Nokia 4.2 Hindi Quick Review, Features Comparison #GTUMWC19",
          description:
            "Nokia 4.2, the company offers a device with a 5.7-inch HD display, premium design with a glass back, and much more. Based on the Snapdragon 439 processor ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/lbDhgLwBqaw/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/lbDhgLwBqaw/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/lbDhgLwBqaw/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "GadgetsToUse",
          liveBroadcastContent: "none"
        }
      }
    ],
    isLoading: false,
    isError: false,
    errorMessage: ""
  };

  const payload2 = {
    videosList: {
      kind: "youtube#searchListResponse",
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/WwqdgSNUDfraUcjFMGIwQCAMjjk"',
      nextPageToken: "CAYQAA",
      prevPageToken: "CAQQAQ",
      regionCode: "EG",
      pageInfo: { totalResults: 34528, resultsPerPage: 2 },
      items: [
        {
          kind: "youtube#searchResult",
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ERlqJ63Coaw1WbWSFr3lYWjCSQM"',
          id: { kind: "youtube#video", videoId: "j8ZNl_rUvy8" },
          snippet: {
            publishedAt: "2018-04-21T17:43:48.000Z",
            channelId: "UCGOIkXwLo74MQk57RfGCDcg",
            title: "Symphony of the Seas Balcony Stateroom tour",
            description:
              "A very quick tour of our Balcony Stateroom on the brand new Symphony of the Seas. This is the first public sailing.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/j8ZNl_rUvy8/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/j8ZNl_rUvy8/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/j8ZNl_rUvy8/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "Warren Gibson",
            liveBroadcastContent: "none"
          }
        }
      ]
    },
    isNextPage: true
  };

  it("Should return initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("Should handle LOAD_VIDEOS_REQUEST", () => {
    expect(reducer(undefined, { type: LOAD_VIDEOS_REQUEST })).toMatchSnapshot();
  });

  it("Should handle LOAD_VIDEOS_ERROR", () => {
    expect(
      reducer(undefined, {
        type: LOAD_VIDEOS_ERROR,
        payload: { error: "Test Error" }
      })
    ).toMatchSnapshot();
  });

  it("Should handle LOAD_VIDEOS_SUCCESS", () => {
    expect(
      reducer(undefined, {
        type: LOAD_VIDEOS_SUCCESS,
        payload: payload1
      })
    ).toMatchSnapshot();
  });

  it("Should handle LOAD_VIDEOS_SUCCESS and append new videos", () => {
    expect(
      reducer(prevState, {
        type: LOAD_VIDEOS_SUCCESS,
        payload: payload2
      })
    ).toMatchSnapshot();
  });
});
