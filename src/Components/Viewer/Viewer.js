import React, {useState} from 'react';
import "./Viewer.css";

export default function Viewer(props) {
  const placeholder = "https://avatars1.githubusercontent.com/u/20723543?s=460&u=338930143d9f358becc1f9f843fbf4d6bcbb4a88&v=4";
  const [isActive, toggle] = useState(true);

  return (
    <div className="viewer">
      <img className={"image--"+isActive.toString()}
           src={(props.image)?props.image.toString():placeholder} alt=" "
           onClick={() => toggle(prevState => !prevState)} />
    </div>
  );
}
