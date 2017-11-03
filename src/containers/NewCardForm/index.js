import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { addCard } from '../../actions/cards.js';


class NewCardForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      priority: '',
      status: '',
      dueDate: '',
    };
  }

  handleChangeTitle(event){
    this.setState({
      title: event.target.value
    });
  }

  handleChangeDescription(event){
    this.setState({
      priority: event.target.value
    });
  }

  handleChangePriority(event){
    this.setState({
      priority: event.target.value
    });
  }

  handleChangeStatus(event){
    this.setState({
      priority: event.target.value
    });
  }

  handleChangeDueDate(event){
    this.setState({
      priority: event.target.value
    });
  }
}


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


export default NewCardForm;



