import React, {useState} from 'react';

export default function SearchForm(props) {
  const [input,setInput] = useState('Search');

  const handleChange = (event) => {
    if(event.target.value.length < 12) {setInput(event.target.value);}
  };
  const handleSubmit = (event) => {
    props.handleSearch(input);
    event.preventDefault();
  };

  return(
    <form className="form" target="_self" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} minLength="1" maxLength="10"/>
      <button type="submit" onSubmit={handleSubmit} >+</button>
    </form>
  );
}
