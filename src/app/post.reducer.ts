import * as PostActions from './post.actions';
import { Post } from './post.model';

// grabs our action types
export type Action = PostActions.All;

// Default app state
const defaultState: Post = {
  text: "I'm a default post",
  likes: 0,
};

// Helper function Object.assign builds new state
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      console.log(action.payload);
      return newState(state, { text: action.payload });
    case PostActions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });
    case PostActions.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });
    case PostActions.RESET:
      return defaultState;
    default:
      return state;
  }
}
