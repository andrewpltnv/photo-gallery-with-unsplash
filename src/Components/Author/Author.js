import React, {useState} from 'react';
import InkText from "../InkText/InkText";
import pastel from '../../palettes/pastel';
import "./Author.css";

export default function Author (props) {
<<<<<<< HEAD
=======
  const [ink, paint] = useState("white");
  const colors = [
    "#f445fd",
    "#f9737f",
    "#ef65ff",
    "#456ef5",
  ];
>>>>>>> 8af211e82934861bb046894ec4417d9d113b164b

  const _name = (props.name.length < 16)?props.name:props.name.slice(0,16).concat(" ...");

  const buttons = props.images.map((item,index) => {
    return (
      <button className="button" key={index}
              style={{
                backgroundImage: 'url(' + props.images[index].regular + ')',
                backgroundSize:"contain"
              }}
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

