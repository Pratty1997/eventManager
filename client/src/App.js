import React from 'react';
import Event from './containers/Event';
import Events from './containers/Events';

class App extends React.Component {
  

  render(){
    return (
      <div className = "App">
        <div className="navbar">
          <h2 className="center"> Welcome to our Event-Management system</h2>
        </div>
          <Event />
          <Events />
      </div>
    )
  }
}

export default App;