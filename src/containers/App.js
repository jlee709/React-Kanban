import React from "react";
import Column from '../components/columns.js';



class App extends React.Component{
  constructor(){
    super();
    this.state = {cards: []};
   
  }

  componentDidMount(){
    this.setState();
  }

  // DATABASE DATA__
  // title: DataTypes.STRING,
  //   description: DataTypes.STRING,
  //   dueDate: DataTypes.STRING,
  //   priority: DataTypes.INTEGER,
  //   status: DataTypes.STRING
  // });

  render() {
    console.log(this.props.cards);
    return (
      <div>
        <h1>Kanban</h1>

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


    );
  }
}

export default App;
