import React from "react";
import Card from './cards';


class Column extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
     <div className="container">
        <h3>Task Column</h3>
          <ul>
            <Card />
          </ul>
     </div> 
    )
  }
}

export default Column;