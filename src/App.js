import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Preview from "./Components/Preview/Preview";
import Footer from "./Components/Footer/Footer";
import Viewer from "./Components/Viewer/Viewer";

export default function App() {
  const [selectedPicture, select] = useState(false);

  return (
    <div className="App">
      <Header>Photo Gallery</Header>
      <div id="space">
        <Preview select={select}/>
        <Viewer image={selectedPicture}/>
      </div>
      <Footer/>
    </div>
  );
}
