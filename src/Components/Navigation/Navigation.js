import React from 'react';

export default function Navigation(props) {
  const current = props.pages.current;
  const total = props.pages.total;

  const handleNavigation = (action) => {
    switch (action) {
      case "next":
        if(current+1 === total){
          props.handleNavigation({current: 0, total: total})
        } else props.handleNavigation({current: current+1, total: total});
        break;
      case "back":
        if(current === 0){
          props.handleNavigation({current: total-1, total: total})
        } else props.handleNavigation({current: current-1, total: total});
        break;
      default:
        props.handleNavigation({current: 0, total: total});
        break;
    }
  };
  console.log("total "+total);
  return(
    <form className="navigation">
      <button onClick={(event) => {
        handleNavigation("back");
        event.preventDefault();
      }} >-</button>
      <button onClick={(event) => {
        handleNavigation("base");
        event.preventDefault();
      }} >{current}</button>
      <button onClick={(event) => {
        handleNavigation("next");
        event.preventDefault();
      }} >+</button>
    </form>
  );
}
