import { Link } from 'react-router';
import React from 'react';


export default class Login extends React.Component{
  render(){
    return(
      <div>
        <h1>Login to Short Link</h1>

        Login form here

        <Link to="/signup">Create an account? </Link>
      </div>
    );
  }
}
