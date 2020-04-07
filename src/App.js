import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Preview from "./Components/Preview/Preview";
import Footer from "./Components/Footer/Footer";
import Viewer from "./Components/Viewer/Viewer";
import Navigation from "./Components/Navigation/Navigation";
import Unsplash, {toJson} from "unsplash-js/lib/unsplash";
const unsplash = new Unsplash({accessKey: "mPLF8epcvlND9fF_jRCEoHDjoFRKGpJwfvOF3u2hNY8"});

export default function App() {
  const [selected, select] = useState(false);
  const [word, setWord] = useState('Fox');
  const [data,setData] = useState();
  const [flag,setFlag] = useState(false);
  const [page,setPage] = useState(1);

  const handleSearch = (request) => {
    setWord(request);
    setPage(1);
  };

  useEffect(()=>{
    unsplash.search.collections(word, page, 8)
      .then(toJson)
      .then(json => {
        setData(json.results);
        setFlag(true);
      });
  },[page,word]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch}>Photo Gallery</Header>
      <div id="space">
        <Viewer image={selected}/>
        <div id="table"> </div>
      </div>
      <Footer>
        <Navigation page={page} total={20} handleNavigation={setPage}/>
      </Footer>
      {flag?<Preview data={data} select={select}/>:<></>}
    </div>
  );
}
