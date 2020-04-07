import React, {useState} from 'react';
import "./Viewer.css";

export default function Viewer(props) {
  const placeholder = "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5";
  const [isActive, toggle] = useState((window.innerWidth <= 640));
  const checkSize = () => {
    toggle((window.innerWidth <= 640));
  };
  window.addEventListener('resize',checkSize);

  return (
    <div className="viewer">
      <img className={"image--"+isActive.toString()}
           src={(props.image)?props.image.toString():placeholder.toString()} alt=" "
           onClick={() => toggle(prevState => !prevState)} />
    </div>
  );
}
