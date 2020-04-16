import React from 'react';
import "./Footer.css";
<<<<<<< HEAD
import InkText from "../InkText/InkText";
import pastel from "../../palettes/pastel";
=======
>>>>>>> 8af211e82934861bb046894ec4417d9d113b164b

export default function Footer(props) {
  return (
    <footer>
      {props.children}
      <p className="footer--text"><InkText colors={pastel}>created by andrewpltnv@gmail.com</InkText></p>
    </footer>
  );
}
