import React, {useState} from 'react';
import "./Author.css";

export default function Author (props) {
  const [isActive, toggle] = useState(false);
  const [ink, paint] = useState("black");
  const colors = [
    "#872790",
    "#d3616b",
    "#ef65ff",
    "#456ef5",
  ];

  const _name = (props.name.length < 11)?props.name:props.name.slice(0,11).concat(" ...");

  return (
    <div className="item--preview" onClick={()=>{toggle(!isActive);}}>
      <h4 className="author--name"
          style={{color: ink,cursor: "cell"}}
          onClick={()=>Painting()}>{_name}
      </h4>
      <div className="buttons">{
        props.images.map((item,index) => {
          return (
            <button className="button" key={index}
                    onClick={() => props.onClick(props.images[index].regular)}
            />
          );
        })}
      </div>
    </div>
  );

  function Painting() {
    const current = colors.findIndex(count);
    const next = (current >= colors.length - 1)?colors[0]:colors[current+1];
    paint(next);
  }
  function count(item) {
    return item.valueOf() === ink.valueOf();
  }
};

