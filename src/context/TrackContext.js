import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackRecuer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};

const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackRecuer,
  {
    fetchTracks,
    createTrack,
  },
  []
);
