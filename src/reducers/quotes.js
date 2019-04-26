export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
     return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quoteId !== action.quoteId);
    case 'UPVOTE_QUOTE':
      return 
    default:
      return state
  }
  
  
}
