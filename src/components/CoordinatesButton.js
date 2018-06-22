import React from 'react';
 
class CoordinatesButton extends React.Component { 
 receiveCoordinates = (event) => {
 	this.props.onReceiveCoordinates([event.clientX, event.clientY]);
 }

  render() {
    return (
      <button 
      	onClick={this.receiveCoordinates}>Coordinates finder
      </button>
    )
  }
}
 
export default CoordinatesButton;