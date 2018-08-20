import React, { Component } from 'react';
import Player from './components/Player'

export const TRACKS = [
  {
    title: 'So Far Away',
    artist: 'Martin Garrix & David Guetta',
    lyrics: 'Light \'em up, light \'em up\nTell me where you are, tell me where you are\nSummer nights, bright lights\nAnd the shootin\' stars, they break my heart\nCallin\' you now, but you\'re not pickin\' up',
    albumArtUrl: "http://localhost:8081/img/268x0w.jpg",
    audioUrl: "http://localhost:8081/mp3/SoFarAway-MartinGarrixDavidGuettaJamieScottRomyDya-5298615.mp3",
  },
  {
    title: 'Rewrite the start',
    artist: 'Zac Efron',
    albumArtUrl: "http://localhost:8081/img/maxresdefault.jpg",
    audioUrl: 'http://localhost:8081/mp3/Rewrite%20The%20Stars%20-%20Zac%20Efron,%20Zendaya.mp3',
  },
  {
    title: 'I love you, i hate you',
    artist: 'Gnash feat. Olivia O\'Brien\'',
    albumArtUrl: 'http://localhost:8081/img/hqdefault.jpg',
    audioUrl: 'http://localhost:8081/mp3/gnash%20-%20i%20hate%20u%20i%20love%20u%20ft.%20olivia%20o\'brien.mp3',
  },
  {
    title: 'Honest',
    artist: 'Chainsmokers',
    albumArtUrl: 'http://localhost:8081/img/maxresdefault%20(1).jpg',
    audioUrl: 'http://localhost:8081/mp3/The_Chainsmokers_-_Honest_NaijaExclusive.net.mp3',
  },
];

export default class App extends Component {
  render() {
    return (
        <Player tracks={TRACKS} />
    );
  }
}