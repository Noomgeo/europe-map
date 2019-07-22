import React from 'react';
import './App.css';
import Europe from './Europe';

const colors = ['red', 'green', 'blue', 'orange', 'yellow', '#fc0da1'];

class App extends React.Component {
  state= {}

  changeCountryColor = (event)=> {
    console.log(event.target.id, this.state[event.target.id]);
    const currentColorIndex = colors.indexOf( this.state[event.target.id] );
    const nextColorIndex = (currentColorIndex +1) % colors.length; 
    //let nextColorIndex = currentColorIndex + 1;
    //if( nextColorIndex === colors.length ){
    //  nextColorIndex = 0;
    //}
    const nextColor = colors[ nextColorIndex ];

    this.setState({
      [event.target.id]: nextColor,
    })
  }

  render() {
    return (
      <div className="App">
        <Europe countryColors={this.state} onClick={this.changeCountryColor}/>
      </div>
    );
  }
}

export default App;
