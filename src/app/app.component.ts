import { Component } from '@angular/core';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hexMap = [];

  ngOnInit() {
    this.default();
  }

  /* 4-player */
  rows = [4,5,6,6]
  dTokens = [
    5,6,5,8,6,4,9,10,11,3,9,11,3,8,4,10,12,3,10,4,2
  ]
  dResources = [
    "ore","wool","brick","grain",
    "ore","brick","grain","wool","lumber",
    "wool","lumber","wool","ore","lumber","ore",
    "grain","lumber","brick","grain","brick","ore"
  ]

  ports = [
    "grain",
    "brick",
    "lumber",
    "wool",
    "ore"
  ]

  shuffleArray(array) {
    let nArr = [...array];
    var m = nArr.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = nArr[m];
      nArr[m] = nArr[i];
      nArr[i] = t;
    }

    return nArr;
  }

  combineHexes(tokens, resources) {
    if(tokens.length != resources.length) { console.log("There is an issue with the two input arrays, sizes are not equal."); }
    
    let combined = [];
    for (let i = 0; i < tokens.length; i++) {
      combined.push([tokens[i],resources[i]]);
    }

    return combined;
  }

  fillMapWithHexes(hexes, rows) {
    let map = [];

    for(let i = 0; i < rows.length; i++) {
      let tempArr = []
      for(let ii = 0; ii < rows[i]; ii++) {
        tempArr.push(hexes.shift());
      }
      map.push(tempArr);
    }

    return map;
  }

  randomize() {
    console.log("randomize!");

    let nResources = this.shuffleArray(this.dResources);

    let hexes = this.combineHexes(this.dTokens, nResources);
    let map = this.fillMapWithHexes(hexes, this.rows);
    this.hexMap = map;
  }

  default() {
    console.log("default!");

    let hexes = this.combineHexes(this.dTokens, this.dResources);
    let map = this.fillMapWithHexes(hexes, this.rows);
    this.hexMap = map;
  }
}