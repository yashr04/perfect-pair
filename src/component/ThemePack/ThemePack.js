import React, { useState } from 'react';
import data from './data.js';
import Themes from './Themes.js';
import './themePack.css';
const ThemePack = ()=>{

  const[themes, setThemes] = useState(data)

  function removeTheme(id){
    const newThemes = themes.filter ( theme => theme.id !==id);
    setThemes(newThemes);
  }
  if(themes.length ===0){
    return(
      <div className='refresh'>
        <h2> No Themes Left</h2>
        <button className='btn-refresh' onClick={()=> setThemes(data)}>
          Refresh
        </button>
      </div>
    );
  }



  return (
    <div className='app'>
      <Themes themes ={themes} removeTheme ={removeTheme}> </Themes>
    </div>
  );
}
export default ThemePack;
