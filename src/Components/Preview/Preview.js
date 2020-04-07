import React, {useState} from "react";
import "./Preview.css";
import SearchForm from "../SearchForm/SearchForm";
import Author from "../Author/Author";
import Navigation from "../Navigation/Navigation";


export default function Preview(props) {
  return (
    <div className="preview">
      <SearchForm onClick={props.handleSearch}/>
      {props.content.map((item,index)=>(itemRender(item.images,item.name,index)))}
      <Navigation pages={props.pages} handleNavigation={props.handleNavigation}/>
    </div>
  );

  function itemRender(images, name = "Name Lastname", index) {
    return <Author images={images} name={name} onClick={props.onClick} index={index} key={index}/>;
  }
}

