import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Preview from "./Components/Preview/Preview";
import Footer from "./Components/Footer/Footer";
import Viewer from "./Components/Viewer/Viewer";
import Unsplash, {toJson} from "unsplash-js/lib/unsplash";
const unsplash = new Unsplash({accessKey: "mPLF8epcvlND9fF_jRCEoHDjoFRKGpJwfvOF3u2hNY8"});

function App() {
  const [word, setWord] = useState('Fox');
  const [data,setData] = useState();
  const [flag,setFlag] = useState(false);
  const [pages,setPages] = useState();

  useEffect(()=>{
    console.log(data);
    unsplash.search.collections(word, pages.current)
      .then(toJson)
      .then(json => {
        console.log(json);
        setFlag(true);
        setPages({current: 0, total: json.total});
        setData(ItemFactory(json.results));
      });
  },[word,pages]);

  const handleSearch = (request) => setWord(request);

  return (
    <div className="App">
      <Header>Photo Gallery</Header>
      <div id="space">{
        data
          ?<Preview content={data} pages={pages}
                    onClick={setFlag} handleSearch={handleSearch} handleNavigation={setPages}/>
          :<div>aha</div>
        }
        <Viewer image={flag}/>
      </div>
      <Footer/>
    </div>
  );
}

const content = [
  {
    images: [{
      regular: "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5",
      full: " ",
    }],
    name: "Platonov Drews",
  }, {
    images: [{
      regular: "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5",
      full: " ",
    }],
    name: "Masha K-Pop",
  }, {
    images: [{
      regular: "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5",
      full: " ",
    }],
    name: "Platonov Drews",
  }, {
    images: [{
      regular: "https://instagram.fiev18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91207066_2829312010634062_7000031126740627651_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dDrt1EzUzJ8AX9XT2xE&oh=9d8b2e1b1c650ac2d9bc1b2fbcf7872d&oe=5EAE07F5",
      full: " ",
    }],
    name: "Masha K-Pop",
  },
];

class Author {
  constructor(item) {
    this.name = item.user.first_name + ' ' + item.user.last_name;
    this.images = item.preview_photos.map((item)=>{ return {regular: item.urls.regular, full: item.urls.full}; });
  }
}
function ItemFactory(array) {return array.map(item => new Author(item));}

export default App;
