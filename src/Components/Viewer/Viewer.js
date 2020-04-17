import React from 'react';
import "./Viewer.css";

export default function Viewer(props) {
  const placeholder = "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5";
  const placeholder2 = "https://images.unsplash.com/photo-1553490711-d565fc6a4956?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";

  return (
    <div className="viewer">
      <img className={"image"}
           src={(props.image)?props.image.toString():placeholder2.toString()} alt=" "
      />
    </div>
  );
}
