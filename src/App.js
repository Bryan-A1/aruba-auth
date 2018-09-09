import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Spotify from 'spotify-web-api-js'
const spotifyWebApi = new Spotify();



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    }

 
  }

  handleSearch(){
    var data= firebase.database();
    firebase.database().ref('test').push({
      age: 20,
      token: "hskdjadas",
  });

  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;