import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/cards.js';

console.log( {addCard });

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChange.bind(this);

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
    this.props.addCard(this.state.title);
    this.props.addCard(this.state.description);
    this.props.addCard(this.state.dueDate);
    this.props.addCard(this.state.priority);
    this.props.addCard(this.state.status);
  }


  render() {
    return(

      <div id="new-card-form">
        <h2>
          Add New Tasking
        </h2>
          
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" name="title" placeholder="title" onChange={this.handleChangeTitle.bind(this)} />
          <input type="text" name="description" placeholder="description" onChange={this.handleChangeDescription.bind(this)} />
          <input type="text" name="dueDate" placeholder="dueDat" onChange={this.handleChangeDueDate.bind(this)}/>
          <input type="number" name="priority" placeholder="priority" onChange={this.handleChangePriority.bind(this)}/>
          <input type="text" name="status" placeholder="status" onChange={this.handleChangeStatus.bind(this)}/>
          <input type="submit" value="Submit Card" onChange={this.handleChange.bind(this)}/>
          
        </form>
      </div>
    )
  }
}



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






