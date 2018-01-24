import React, { Component } from 'react';
import './App.css';
import 'aframe';

import interior from './assets/gmc_equirectangular.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <a-scene>
          <a-assets>
            <img alt="ground" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
            <img alt="sky" id="skyTexture" src={interior}/>
          </a-assets>
          <a-sphere color="#fff" position="-2 1 0" radius="0.08"/>
          <a-sphere color="#fff" position="-2 1 -2" radius="0.08"/>
          <a-light type="ambient" color="#fff"></a-light>
          <a-entity rotation="0 90 0">
            <a-camera>
              <a-cursor></a-cursor>
            </a-camera>
          </a-entity>
          <a-sky src="#skyTexture"></a-sky>
        </a-scene>
      </div>
    );
  }
}

export default App;
