import React from 'react';

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
    <form className="navigation" id="navigation">
      <button onClick={(event) => handleReducer("base", event)} >{page}</button>
      <button onClick={(event) => handleReducer("next", event)} >+</button>
      {
        (page > 1)
          ?<button onClick={(event) => handleReducer("back", event)} >-</button>
          :<></>
      }
    </form>
  );
}
