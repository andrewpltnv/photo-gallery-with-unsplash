import React, {useEffect, useState} from "react";
import "./Preview.css";
import Author from "../Author/Author";

export default function Preview(props) {
  const [data,setData] = useState();
  useEffect(()=>{
    setData(ItemFactory(props.data));
    console.log("!!!");
  },[props.data]);

  return (
    <div className="wrapper">
      <div className="preview">
        {data?data.map((item,index)=>(itemRender(item.images,item.name,index))):<></>}
      </div>
    </div>
  );
  /*
    <SearchForm handleSearch={handleSearch}/>
    <Navigation page={page} total={totalPages} handleNavigation={setPage}/>
  */
  function itemRender(images, name = "Name Lastname", index) {
    return <Author images={images} name={name} select={props.select} index={index} key={index}/>;
  }
  function ItemFactory(array) {
    return array.map(item => new AuthorInstance(item));
  }
}
class AuthorInstance {
  constructor(item) {
    this.name = item.user.first_name + ' ' + item.user.last_name;
    this.images = item.preview_photos.map((item)=>{ return {regular: item.urls.regular, full: item.urls.full}; });
  }
}
