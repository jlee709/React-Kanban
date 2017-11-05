// jshint esversion:6

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {loadCards} from '../actions/cards.js';
// import moveLeft from '../actions/moveLeft';
// import moveRight from '../actions/moveRight';


class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: 1,
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      status: '',
    };
  }

  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.handleChange = this.handleChange.bind(this);


  handleChange(event){
    const target = event.target;
    const value = event.value;
    const name = event.target.name;
  }

  componentDidmount(){
    // loadCards();
  }

  // handleSubmit(id, event){
  //   preventDefault();
  //   this.props.loadCards(){
  //     id: id,
  //     title: this.state.title,

  //   }
  // }


  // this.setState({
  //   [name]: value
  // }

  // handleSubmit(id,event){
  //   event.preventDefault();
  //   this.props.LOAD_CARDS(){
  //   id:id,
  //   title: this.state.title
  //   }
  // }



  render(){
    console.log(this.props)
    return(
    <ll>
      card
    </ll>
    )
  }
}

export default Card 

//map dispatch to prop











// Example Code 


  // moveLeft(e){d
  //   console.log(e);
  //   this.props.moveLeft(this.props);
  // }

  // moveRight(e){
  //   console.log('moving right');
  //   this.props.moveRight(this.props);
  // }
