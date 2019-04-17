import { Component } from '@angular/core';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 4-player */
  rows = [4,5,6,6]
  tokens = [
    2,3,3,3,4,4,4,5,5,6,6,8,8,9,9,10,10,10,11,11,12
  ]
  resources = [
    "grain","grain","grain","grain",
    "brick","brick","brick","brick",
    "lumber","lumber","lumber","lumber",
    "wool","wool","wool","wool",
    "ore","ore","ore","ore","ore"
  ]
  ports = [
    "grain",
    "brick",
    "lumber",
    "wool",
    "ore"
  ]

  defaultHexes = [
    [[5,"ore"],[6,"wool"],[5,"brick"],[8,"grain"]],
    [[6,"ore"],[4,"brick"],[9,"grain"],[10,"wool"],[11,"lumber"]],
    [[3,"wool"],[9,"lumber"],[11,"wool"],[3,"ore"],[8,"lumber"],[4,"ore"]],
    [[10,"grain"],[12,"lumber"],[3,"brick"],[10,"grain"],[4,"brick"],[2,"ore"]]
  ]

  shuffleArray(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  combineHexes(tokens, resoures, map) {
    if(tokens.length != resoures.length) { console.log("There is an issue with the two input arrays, sizes are not equal."); }
    
    let combined = [];
    for (let i = 0; i < this.rows.length; i++) {

    }
  }

  fillMapWithHexes() {

  }

  randomize() {
    console.log("randomize!");

    this.resources = this.shuffleArray(this.resources);
    console.log(this.resources);
    
    this.combineHexes(this.resources, this.tokens, this.rows);
  }
}