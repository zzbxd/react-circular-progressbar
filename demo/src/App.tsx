import React, { Component } from 'react';
import Demo2 from './Demo2';

// Stylesheets
// import 'react-circular-progressbar/dist/styles.css';
import './components/Widgets/CircleProgress/styles.css';
import './components/Widgets/LineProgress/styles.css';
import './components/Widgets/Cards/styles.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Demo2 />
      </div>
    );
  }
}

export default App;
