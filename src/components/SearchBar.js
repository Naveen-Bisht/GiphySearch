import React from 'react';
export const SearchBar=(props)=>{
    return (
        <div className='form-group data'>
            <label>Search the Giphy</label>
            <input type='text' onChange={props.takeInput} className='inputbox form-control' placeholder='Type to Search any Image'/>
            <button onClick={props.btClick} className='btn'>Search Now</button>
        </div>
        );
}