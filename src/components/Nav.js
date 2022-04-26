import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import flame from "../img/flame.png";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={flame} alt="flame" />
        <h1>Illuminate</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 2px solid white;
    border-radius: 7px;
    margin-top: 1rem;
    background: none;
    color: white;
  }
  button {
    font-size: 1.7rem;
    border: 1.5px solid white;
    border-radius: 8px;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: none;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2.5rem;
    width: 3rem; 
  }
  h1{
    font-size: 2.5rem;
  }
`;

export default Nav;
