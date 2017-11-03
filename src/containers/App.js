import React from "react";

import Header from '../components/header.js';
import Column from '../components/columns.js';


class App extends React.Component{
  constructor(){
    super();
    this.state = {cards: []};
   
  }

  componentDidMount(){
    this.setState();
  }


  render() {
    console.log(this.props.cards);
    return (
      <div>
        <Header />

        <div>

          <Column
          id = "queue"
          title = "Queue"
          cards = "start something" /*{}->/* this.props.cards.filter(card => card.status === "queue") */
          />

          <Column
          id = "progress"
          title = "Progress"
          cards = "doing something" /* {}-> this.props.cards.filter(card => card.status === "progress")*/ 
          />

          <Column
          id = "done"
          title = "Done"
          cards = "finished thing" /* {}-> this.props.cards.filter(card => card.status === "done")*/ 
          />

        </div>

      </div>

    );
  }
}

export default App;
