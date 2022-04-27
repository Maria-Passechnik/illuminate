import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id), {
    headers: {
        'Content-Type': 'application/json'
    }
});
  const screenShotData = await axios.get(gameScreenshotURL(id), {
    headers: {
        'Content-Type': 'application/json'
    }
});

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
