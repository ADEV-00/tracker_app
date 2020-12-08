import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackRecuer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const ress = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: ress.data });
};

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
