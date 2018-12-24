import { browserHistory } from 'react-router';
import React from 'react';


export default class Link extends React.Component{
  render(){
    return(
      <div>
        <button onClick={()=>{browserHistory.push('/')}}>Log Out</button>
      </div>
    );
  }
}
