// App is a Component. Top Level Component
import React from 'react';
import Search from './containers/Search';
import './App.css';

 export function App(props){
  return (
    <div className="container">
      <Search title='Giphy Image Search' name='Developed by: Naveen Bisht' link1='https://www.linkedin.com/in/nbisht7/' link2='https://github.com/Naveen-Bisht'/>
    </div>
  )
}
//export default App;
export const x = 100;