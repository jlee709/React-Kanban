

//need to render the card list 


//this is a dummy component that will only handle the rndering of what cards are here 

// must filter cards 

// map over cards so that a new array can be returned 


import React from 'react';
import Card from '../components/cards.js';

const LIST_STATUS = ['IN QUEUE', 'IN PROGRESS', 'DONE'];

const List = (props) => (

  <div className="cards-container">
  <h1>
  {LIST_STATUS[props.status]}
  </h1>
    <ul>
      {props.cards.map( (card, index) => {
        return <Card card={props.cards[index]}/>
      })}
      <hr/>
    </ul>
  </div>
)

export default List;