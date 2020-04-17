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
  const [selected, select] = useState("https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5");
  const [word, setWord] = useState('Fox');
  const [data,setData] = useState();
  const [flag,setFlag] = useState(false);
  const [page,setPage] = useState(1);

  const handleSearch = (request) => {
    setWord(request);
    setPage(1);
  };

  useEffect(()=>{
    unsplash.search.collections(word, page, 7)
      .then(toJson)
      .then(json => {
        setData(json.results);
        console.log(json.results);
        setFlag(true);
      });
  },[page,word]);

  return(
    <div className="App">
      <Header text={"Photo Gallery"} handleSearch={handleSearch}/>
      <div id="space">
        {
          flag?<Preview data={data} select={select}>
            <Navigation page={page} total={20} handleNavigation={setPage}/>
          </Preview>:<></>
        }
        <Viewer image={selected}/>
      </div>
      <Footer/>
    </div>
  );
}
