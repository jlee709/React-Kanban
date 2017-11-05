import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/cards.js';


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);


    this.state = {
      title : '',
      description: '',
      dueDate: '',
      priority: '',
      status: '',
    };
  }

  handleChangeTitle(event){
    console.log(event, 'THIS IS AN EVENT SHIT!')
    this.setState({
      title: event.target.value
    });
  }

  handleChangeDescription(event){
    this.setState({
      description: event.target.value
    });
  }

  handleChangeDueDate(event){
    this.setState({
      dueDate: event.target.value
    });
  }

  handleChangePriority(event){
    this.setState({
      priority: event.target.value
    });
  }

  handleChangeStatus(event){
    this.setState({
      status: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      title : event.target.value,
      description : event.target.value,
      dueDate : event.target.value,
      priority : event.target.value,
      status : event.target.value
    });
}

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props, " PROPS PORPS THIS IS PROPS ~! ! ! ! !! ! ");

    const newCardData = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
      priority: this.state.priority,
      status: this.state.status
    };

    this.props.addCard(newCardData);

  }



  render() {
    return(

      <div id="new-card-form">
        <h2>
          Add New Tasking
        </h2>
          
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" name="title" placeholder="title" onChange={this.handleChangeTitle} value={this.state.title}/>
          <input type="text" name="description" placeholder="description" onChange={this.handleChangeDescription} value={this.state.description} />
          <input type="text" name="dueDate" placeholder="dueDat" onChange={this.handleChangeDueDate} value={this.state.dueDate}/>
          <input type="number" name="priority" placeholder="priority" onChange={this.handleChangePriority} value={this.state.priority}/>
          <input type="text" name="status" placeholder="status" onChange={this.handleChangeStatus.bind(this)} value={this.state.status}/>
          <input type="submit" value="Submit Card" onChange={this.handleChange.bind(this)} value={this.state.handleChange} />
          
        </form>
      </div>
    )
  }
} //End of class bracket 



const mapStateToProps = (state) => {
  return {
    users: state.users,
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);






