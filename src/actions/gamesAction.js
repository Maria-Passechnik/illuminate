import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {

  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL(), {
    headers: {
        'Content-Type': 'application/json'
    }
} );

  const newGamesData = await axios.get(newGamesURL(), {
    headers: {
        'Content-Type': 'application/json'
    }
});
  const upcomingData = await axios.get(upcomingGamesURL(), {
    headers: {
        'Content-Type': 'application/json'
    }
});
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name), {
    headers: {
        'Content-Type': 'application/json'
    }
});

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
