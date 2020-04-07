import React from 'react';
import './Header.css';
import SearchForm from "../SearchForm/SearchForm";

export default function Header(props) {
  return (
    <header>
      <a href="/"
         target="_blank"
         rel="noreferrer noopener"
         className="header--link"
         onClick={()=>window.location.reload(true)}
      >
        {props.children}
      </a>
      <SearchForm handleSearch={props.handleSearch}/>
    </header>
  );
}
