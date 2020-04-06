import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Preview from "./Components/Preview/Preview";
import Unsplash, {toJson} from "unsplash-js/lib/unsplash";
import Footer from "./Components/Footer/Footer";
import Viewer from "./Components/Viewer/Viewer";

const unsplash = new Unsplash({accessKey: "mPLF8epcvlND9fF_jRCEoHDjoFRKGpJwfvOF3u2hNY8"});

function App() {
  const [data, setData] = useState(contentt);
  const [flag,setFlag] = useState(false);

  function handleToggle(image){
    setFlag(image);
  }

  useEffect(()=>{
    unsplash.search.collections("rats", 1)
      .then(toJson)
      .then(json => {
        console.log(json);
        setFlag(true);
        setData(ItemFactory(json.results));
      });
  },[]);

  return (
    <div className="App">
      <Header>Photo Gallery</Header>
      <div id="space">
        {flag
          ?<Preview content={data}
                    onClick={handleToggle}/>
          :<p>stay</p>}
        <Viewer image={flag}/>
      </div>
      <Footer/>
    </div>
  );
}

function ItemFactory(array) {
  return array.map( item => new Item(item));
}

class Item {
  constructor(item) {
    this.name = item.user.first_name + ' ' + item.user.last_name;
    this.images = [{
      regular: item.preview_photos[0].urls.regular,
      full: item.preview_photos[0].urls.full
    },{
      regular: item.preview_photos[1].urls.regular,
      full: item.preview_photos[1].urls.full
    },{
      regular: item.preview_photos[1].urls.regular,
      full: item.preview_photos[1].urls.full
    },{
      regular: item.preview_photos[1].urls.regular,
      full: item.preview_photos[1].urls.full
    },
    ];
  }
}
const contentt = [
  {
    images: {
      regular: "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5",
      full: " ",
    },
    name: "-------- -----",
  },
  {
    images: {
      regular: "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5",
      full: " ",
    },
    name: "----- -------",
  },
];

export default App;
