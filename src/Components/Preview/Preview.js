import React from "react";
import "./Preview.css";
import Author from "../Author/Author";

export default function Preview(props) {
    const content = props.content;

    return (
      <div className="preview">{
        content.map((item,index)=>(
          itemRender(item.images,item.name,index)
        ))}
      </div>
    );

    function itemRender(images, name = "Name Lastname", index) {
        return(
          <Author images={images} name={name}
                  onClick={props.onClick}
                  index={index} key={index}/>
        );
    }
}
