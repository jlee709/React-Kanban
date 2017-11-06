import React from "react";
import Card from './cards.js';
import cards from '../reducers/cards.js';

class Column extends React.Component{
  constructor(props){
    super(props);
  }




  render(){
    return(
     <div className="container">
        <h3>Task Column</h3>
          <ul>
            {this.props.cards.map( (card, id) => {
            return <Card card={cards.data}/>
            })}
          </ul>
     </div> 
    )
  }
}

export default Column;