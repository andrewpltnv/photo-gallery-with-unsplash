import React from 'react';
import "./Navigation.css";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";

export default function Navigation(props) {
  const total = props.total;
  const page = props.page;

  const handleNavigation = (temp,event) => {
    event.preventDefault();
    props.handleNavigation(temp);
  };

  const handleReducer = (action, event) => {
    switch (action) {
      case "next":
        if(page+1 === total){
          handleNavigation(0, event)
        } else handleNavigation(page + 1, event);
        break;
      case "back":
        if(page === 1){
          handleNavigation(10, event)
        } else handleNavigation(page-1,event);
        break;
      default:
        handleNavigation(1,event);
        break;
    }
  };

  return(
    <div className="item--preview">
      <div className="controls">
        {(page > 1)
          ?<button className="button nav" onClick={(event) => handleReducer("back", event)}>
            <SkipPrevious fontSize="medium" color="action"/>
          </button>
          :<button className="button nav"/>
        }
        <h1 className="page--counter">{props.page}</h1>
        <button className="button nav" onClick={(event) => handleReducer("next", event)}>
          <SkipNext fontSize="medium" color="secondary"/>
        </button>
      </div>
    </div>

  );
}
