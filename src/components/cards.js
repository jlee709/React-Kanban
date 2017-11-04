// jshint esversion:6

import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { connect } from 'react-redux';
// import moveLeft from '../actions/moveLeft';
// import moveRight from '../actions/moveRight';


class Card extends Component {
  constructor(props){
    super(props);
  }

  newCard(){
    
  }
  // moveLeft(e){d
  //   console.log(e);
  //   this.props.moveLeft(this.props);
  // }

  // moveRight(e){
  //   console.log('moving right');
  //   this.props.moveRight(this.props);
  // }


  render(){
    return(
      <div className="card">
        <h4>Card</h4>
        
      </div>
    )
  }
}

export default Card 

//map dispatch to prop
