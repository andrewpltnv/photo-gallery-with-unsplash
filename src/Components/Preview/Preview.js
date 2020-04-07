import React, {useEffect, useState} from "react";
import "./Preview.css";
import SearchForm from "../SearchForm/SearchForm";
import Author from "../Author/Author";
import Navigation from "../Navigation/Navigation";
import Unsplash, {toJson} from "unsplash-js/lib/unsplash";
const unsplash = new Unsplash({accessKey: "mPLF8epcvlND9fF_jRCEoHDjoFRKGpJwfvOF3u2hNY8"});


export default function Preview(props) {
  const [word, setWord] = useState('Fox');
  const [data,setData] = useState();
  const [flag,setFlag] = useState(false);
  const [page,setPage] = useState(1);
  const [total_pages,setTotal] = useState(0);

  const handleSearch = (request) => {
    setWord(request);
    setPage(1);
  };

  useEffect(()=>{
    unsplash.search.collections(word, page)
      .then(toJson)
      .then(json => {
        setData(ItemFactory(json.results));
        setTotal(json["total_pages"]);
        console.log(json["total_pages"]);
        setFlag(true);
      });
  },[page,word]);

  class AuthorInstance {
    constructor(item) {
      this.name = item.user.first_name + ' ' + item.user.last_name;
      this.images = item.preview_photos.map((item)=>{ return {regular: item.urls.regular, full: item.urls.full}; });
    }
  }

  return (
    <div className="preview">
      <SearchForm handleSearch={handleSearch}/>
      {flag
        ?<>
          {data.map((item,index)=>(itemRender(item.images,item.name,index)))}
          {console.log(data)}
          <Navigation page={page} total={total_pages} handleNavigation={setPage}/>
        </>
        :<div>aha</div>
      }
    </div>
  );

  function itemRender(images, name = "Name Lastname", index) {
    return <Author images={images} name={name} select={props.select} index={index} key={index}/>;
  }
  function ItemFactory(array) {
    return array.map(item => new AuthorInstance(item));
  }
}

