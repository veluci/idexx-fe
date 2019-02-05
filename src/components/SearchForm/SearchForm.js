import React from "react";
import './SearchForm.css';

const SearchForm = props => {
  return (
    <div className="panel panel-default ">
        <p>Search for : </p>
      <input type="text" onChange={props.searchFormChange} value={props.searchKey}/>
      <button onClick={props.search} className='btn btn-primary'>Search</button>
    </div>
  );
};

export default SearchForm;
