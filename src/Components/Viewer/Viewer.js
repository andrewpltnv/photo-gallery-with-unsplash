import React from 'react';
import "./Viewer.css";

export default function Viewer(props) {
    return (
      <div className="viewer">
        <img src={props.image} alt=" " className="image"/>
      </div>
    );
}
