import React from 'react';
import "./Footer.css";
import InkText from "../InkText/InkText";
import pastel from "../../palettes/pastel";


export default function Footer(props) {
  return (
    <footer>
      {props.children}
      <p className="footer--text"><InkText colors={pastel}>created by andrewpltnv@gmail.com</InkText></p>
    </footer>
  );
}
