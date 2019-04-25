import uuid from "uuid"

export default function quotesReducer(state = [], action) {
  let idx
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
        let quote = state.find(quote => quote.id === action.quoteId)
        quote = {...quote, votes: quote.votes + 1}
        return [quote]

    case "DOWNVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0) {
        return [{...quote, votes: quote.votes - 1}]
      } else {
        return [quote]
      }


    default:
      return state
  }
}
