import React from "react";
import Card from './cards';


class Column extends React.Component{
  constructor(props){
    super(props);

  }

  

  render(){
    return(
     <div>
        <h3>KanBan Lane</h3>
          <ul>
            <Card />
          </ul>
        
     </div> 
    )
    
  }
}

export default Column;