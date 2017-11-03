import React from "react";
import Card from './cards';


class Column extends React.Component{
  constructor(){
    super();

  }


  render(){
    return(
     <div>
        <h1>Kanban</h1>
        <Card/>
     </div> 
    )
    
  }
}

export default Column;