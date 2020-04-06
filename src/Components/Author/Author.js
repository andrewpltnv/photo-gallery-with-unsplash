import React, {useState} from 'react';
import "./Author.css";
export default function Author(props) {

  const [isActive, toggle] = useState(false);
  const colors = [
    "#872790",
    "#d3616b",
    "#ef65ff",
    "#456ef5",
  ];
  const [ink, paint] = useState("black");

  const _name = (props.name.length < 18)?props.name:props.name.slice(0,18).concat(" ...");

  return (
    <div className="item--preview" onClick={()=>{toggle(!isActive);}}>
      <div>
        <h4 className="author--name"
            style={{color: ink,cursor: "cell"}}
            onClick={()=>{
              Painting()
            }}
        >{_name}</h4>
      </div>
      <div className="buttons">
        <button className="button" onClick={()=>props.onClick(props.images[0].regular)}/>
        <button className="button" onClick={()=>props.onClick(props.images[1].regular)}/>
        <button className="button" onClick={()=>props.onClick(props.images[2].regular)}/>
        <button className="button" onClick={()=>props.onClick(props.images[3].regular)}/>
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
}
