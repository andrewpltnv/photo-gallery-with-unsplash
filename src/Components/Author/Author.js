import React from 'react';
import InkText from "../InkText/InkText";
import pastel from '../../palettes/pastel';
import "./Author.css";

export default function Author (props) {
  const _name = (props.name.length < 16)?props.name:props.name.slice(0,16).concat(" ...");

  const buttons = props.images.map((item,index) => {
    return (
      <button className="button" key={index}
              onClick={() => props.select(props.images[index].regular)}
      />
    );
  });

  return (
    <div className="item--preview">
      <div className="buttons">
        {buttons.slice(0,2)}
          <h4 className="author--name">
            <InkText colors={pastel}>{_name}</InkText>
          </h4>
        {buttons.slice(2,4)}
      </div>
    </div>
  );
};

