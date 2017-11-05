import React from "react";

import Header from '../components/header.js';
import Column from '../components/columns.js';
import NewCardForm from './NewCardForm/index.js';
import { loadCards } from '../actions/cards.js';
import { connect } from 'react-redux';



class App extends React.Component{
  constructor(){
    super();
    this.state = {cards: []};
   
  }

  componentWillMount(){
    this.setState();
    this.props.loadCards();
  }




  render() {
    console.log('this.props.cards', this.props);
    return (
      <div>
        <div className="new-card-from"> 
          <NewCardForm />
        </div>

        <div className="columns">
          <Header />
          <div className="main">
            
            <Column
            id = "queue"
            title = "Queue"
            cards = {[]} 
            />

            <Column
            id = "progress"
            title = "Progress"
            cards = {[] }
            />

            <Column
            id = "done"
            title = "Done"
            cards = {[] }
            />

          </div>
        </div>
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (state) => {
  return {
    loadCards: loadCards
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);









