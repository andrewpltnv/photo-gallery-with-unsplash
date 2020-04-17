import React from 'react';
import InkText from "../InkText/InkText";
import pastel from '../../palettes/pastel';
import "./Author.css";

export default function Author (props) {
  const _name = (props.name.length>14)?props.name.slice(0,14)+"...":props.name;

  const buttons = props.images.map((item,index) => {
    return (
      <button className="button" key={index}
              onClick={() => props.select(props.images[index].regular)}
      />
    );
  });
  const iconStyle = {
    backgroundImage:"url("+props.icon+")",
  };

  return (
    <div className="item--preview">
      <img className="author--icon" style={iconStyle} alt=""/>
      <div className="buttons">
        {buttons.slice(0,3)}
          <h4 className="author--name">
            <InkText colors={pastel}>{_name}</InkText>
          </h4>
      </div>
    </div>
  );
};

