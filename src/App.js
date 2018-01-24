import React, { Component } from 'react';
import './App.css';
import 'aframe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a-scene>
          <a-assets>
            <img alt="ground" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
            <img alt="sky" id="skyTexture" src="https://c1.staticflickr.com/5/4697/24938049577_5c932d583b_f.jpg"/>
          </a-assets>
          <a-box color="red" position="0 2 4" rotation="0 0 10"></a-box>
          <a-light type="ambient" color="#aba"></a-light>
          <a-camera>
            <a-cursor></a-cursor>
        </a-camera>
        <a-sky src="#skyTexture"></a-sky>
        </a-scene>
      </div>
    );
  }
}

export default App;
