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
  const popularData = await axios.get(popularGamesURL()).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
    }
  });

  const newGamesData = await axios.get(newGamesURL()).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
    }
  });
  
  const upcomingData = await axios.get(upcomingGamesURL()).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
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
  const searchGames = await axios.get(searchGameURL(game_name)).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
    }
  });

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
