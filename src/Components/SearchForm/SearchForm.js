import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchForm(props) {
  const [input,setInput] = useState('');

  const handleChange = (event) => {
    if(event.target.value.length < 12) {setInput(event.target.value);}
  };
  const handleSubmit = (event) => {
    props.handleSearch(input);
    event.preventDefault();
  };

  return(
    <form className="form" id="form" target="_self" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} placeholder="Search" minLength="1" maxLength="10"/>
      <button type="submit" onSubmit={handleSubmit} ><span><SearchIcon fontSize="large" color="action"/></span></button>
    </form>
  );
}
