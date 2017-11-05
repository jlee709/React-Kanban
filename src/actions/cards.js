
import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const loadCards = () => {
        console.log(' FUCK DDUCK FU KJFDKSF');
  return function(dispatch){

    return axios.get('http://localhost:8080/api/cards')
    .then( cards => {
      console.log(cards, ' FUCK DDUCK FU KJFDKSF');
      // dispatch({
      //   type: LOAD_CARDS,
      //   cards: cards.data
      // });
    });
  };
}

export const addCard = (card) => {
  return function(dispatch){
    return axios.post('/api/card/new', card)
    .then( card => {
      dispatch({
        type: ADD_CARD,
        card: card.data
      });
    });
  };
}

export const editCard = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/card/${newInfo.id}`, newInfo)
    .then( cards => {
      dispatch({
        type: EDIT_CARD,
        cards: cards.data
      });
    });
  };
}