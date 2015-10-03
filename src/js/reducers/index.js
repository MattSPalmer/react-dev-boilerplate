const INITIAL_STATE = {};
export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_STATE':
    return action.state;
  }
  return state;
}
