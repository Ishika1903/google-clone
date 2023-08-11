import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { MicNone } from "@material-ui/icons";
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider.js";
import {useNavigate} from 'react-router';
import { actionTypes } from "./reducer";


function Search({ hidebuttons }) {
  const[{},dispatch] = useStateValue();
  const[input, setInput] = useState("");
  const history = useNavigate();
  const search = (e) => {
    e.preventDefault();
dispatch({type:actionTypes.SET_SEARCH_TERM, 
term:input})
    history("/search");
  }
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="searchicon" />
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <MicIcon />
      </div>
      {!hidebuttons ? (
        <div className="search_button">
          <Button type="submit" onClick ={search} variant="outlined">
            Google Search
          </Button>
          <Button type="submit" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>): (
        <div className="search_button" style={{display:"none"}}>
          <Button type="submit" onClick ={search} variant="outlined">
            Google Search
          </Button>
        </div>

        
      )}
    </form>
  );
}

export default Search;
