import React from 'react';
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer>
      {props.children}
      <p className="footer--text">created by andrewpltnv@gmail.com</p>
    </footer>
  );
}
