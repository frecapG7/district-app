import {LOGIN, LOGOUT} from '../actions/user';

const user = (state = {
  user: {},
  loggedIn: false
}, action) => {
  switch (action.type) {
    case LOGIN :
      return {
        user: action.user,
        loggedIn: true
      }
    case LOGOUT:
      return {
        user : {},
        loggedIn: false
      }
    default:
      return state
  }
}


export default user;
