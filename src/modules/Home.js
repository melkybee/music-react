import React, { Component } from 'react';
import Notes from './Vex';
import Vex from 'vexflow';
import '../styles/App.css';

const { Accidental, StaveNote } = Vex.Flow;

const chordData = [
  // A quarter-note C.
  new StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),

  // A quarter-note D.
  new StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),

  // A quarter-note rest. Note that the key (b/4) specifies the vertical
  // position of the rest.
  new StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),

  // A C-Major chord.
  new StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
];

class Home extends Component {

  render() {
    return (
    	<div className="home-page">
        <div>
          Home
        </div>
    		<div>
            <Notes chord={chordData} />
        </div>
    	</div>
		);
  }
}

export default Home;




