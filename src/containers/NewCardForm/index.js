import React, { Component } from 'react';


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : '',
      description: '',
      dueDate: '',
      priority: '',
      status: '',
    };
  }

  handleChangeTitle(event){
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCard(this.state.title);
    this.props.addCard(this.state.description);
    this.props.addCard(this.state.dueDate);
    this.props.addCard(this.state.priority);
    this.props.addCard(this.state.status);
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

  render() {
    return(

      <div id="new-card-form">
        <h2>
          Add New Tasking
        </h2>

        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" name="title" placeholder="title" onChange={this.handleChange.bind(this)} />
          <input type="text" name="description" placeholder="description" onChange={this.handleChange.bind(this)} />
          <input type="text" name="dueDate" placeholder="dueDat" onChange={this.handleChange.bind(this)}/>
          <input type="number" name="priority" placeholder="priority" onChange={this.handleChange.bind(this)}/>
          <input type="text" name="status" placeholder="status" onChange={this.handleChange.bind(this)}/>
          <input type="submit" value="Submit Card" />
          
        </form>
      </div>
    )
  }
}

export default NewCardForm;

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCard: (card) => {
//       dispatch(addCard(card));
//     }
//   };
// };

// const ConnectedNewCardForm = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NewCardForm);


// export default NewCardForm;



