import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loadVideos } from "../videoMapActions";
import * as videoMapUtils from "../../../utils/videoMapUtils";

describe("VideoMap action creators", () => {
  const mockStore = configureMockStore([thunk])({});

  afterEach(() => {
    mockStore.clearActions();
  });

  const videosAPIResponse = {
    kind: "youtube#searchListResponse",
    etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/P0Q5iJsjiJ2zOzcrxDcb85guSJ8"',
    nextPageToken: "CAIQAA",
    regionCode: "EG",
    pageInfo: {
      totalResults: 1494,
      resultsPerPage: 2
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ModJNYQuE9VfOulIBgXRd127_Ew"',
        id: {
          kind: "youtube#video",
          videoId: "ei4r_Bs3cek"
        },
        snippet: {
          publishedAt: "2018-04-26T07:43:02.000Z",
          channelId: "UCVo06dBGK9VBBhq15wJxZHQ",
          title: "#JEFFHUBBARD - #BODYBOARDING #PIPELINE SPECIALIST $$",
          description:
            "Video/Edit: Chris Kincade FINE ART PRINTS www.ChrisKincade.com GET 25% OFF THE ENTIRE SITE! USE CODE “2018” AT CHECKOUT! Instagram: @Chris.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ei4r_Bs3cek/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/ei4r_Bs3cek/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/ei4r_Bs3cek/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "Chris Kincade Media",
          liveBroadcastContent: "none"
        }
      },
      {
        kind: "youtube#searchResult",
        etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Cizv5T8I6oJtAxERYXtftJ0L3xg"',
        id: {
          kind: "youtube#video",
          videoId: "D6zek91qfoM"
        },
        snippet: {
          publishedAt: "2015-02-02T05:51:33.000Z",
          channelId: "UCVo06dBGK9VBBhq15wJxZHQ",
          title: "#662 Boys take XL #Pipeline - #Bodyboarding #Hawaii",
          description:
            "When Pipe gets too big, it's always the 662 Ride Shop boys that tackle it anyways. Here's some clips from January 22nd of Andre Botha, Trevor Kam and ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/D6zek91qfoM/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/D6zek91qfoM/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/D6zek91qfoM/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "Chris Kincade Media",
          liveBroadcastContent: "none"
        }
      }
    ]
  };

  const errorApiResponse = {
    errors: [
      {
        domain: "usageLimits",
        reason: "keyInvalid",
        message: "Bad Request"
      }
    ],
    code: 400,
    message: "Bad Request"
  };

  it("Should successfully load videos", async () => {
    videoMapUtils.getVideosAPI = jest
      .fn()
      .mockImplementation(() => Promise.resolve(videosAPIResponse));
    const action = loadVideos();
    await action(mockStore.dispatch);
    expect(mockStore.getActions()).toMatchSnapshot();
  });

  it("Should fail to load videos", async () => {
    videoMapUtils.getVideosAPI = jest
      .fn()
      .mockImplementation(() => Promise.reject(errorApiResponse));
    const action = loadVideos();
    await action(mockStore.dispatch);
    expect(mockStore.getActions()).toMatchSnapshot();
  });
});
