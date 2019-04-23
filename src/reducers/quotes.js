import uuid from 'uuid';

export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote ]
      break;
    case 'REMOVE_QUOTE':
      let quote = state.find(quoteObj => quoteObj.id === action.quoteId)
      idx = state.indexOf(quote)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      quote = state.find(quoteObj => quoteObj.id === action.quoteId)
      idx = state.indexOf(quote)
      return [...state.slice(0, idx), { ...quote, votes: quote.votes + 1 }, ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quoteObj => quoteObj.id === action.quoteId)
      idx = state.indexOf(quote)
      if (quote.votes > 0) {
        return [...state.slice(0, idx), {...quote, votes: quote.votes - 1}, ...state.slice(idx + 1)]
      } else {
        return state;
      }
    default:
      return state;
  }
}
