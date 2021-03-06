import { RECEIVE_POSTS } from '../actions/posts'

function postsReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts || []
    default:
      return state
  }
}

export default postsReducer
