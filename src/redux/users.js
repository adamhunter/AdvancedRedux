const initialState = {
  all: [],
  user: {
    id: null,
    name: '',
    email: '',
    company: {},
    editing: false
  }
};

const SET_USERS = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER';
const ADD_USER  = 'ADD_USER';
const EDIT_USER = 'EDIT_USER';
const DELETE_USER = 'DELETE_USER';

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, all: action.payload};
    case EDIT_USER:
      return state.map( user => user.id === action.id ? {...user, editing:!user.editing}:user);
    case ADD_USER:
        console.log('user', state);
      console.log('payload', action.payload);
      //return () => {
      //  const newState = {
      //    ...state,
      //    user: {
      //    ...action.payload
      //    }
      //  };
      //  return {...newState};
      //};
      return {...state, ...action.payload};
    case UPDATE_USER:
      return state.map(user => {
        if(user.id === action.payload.id) {
          return action.payload;
        }
        return person;
      });
    default:
      return state;
  }
}

export default usersReducer; 

export const fetchUsers = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(users => { 
        dispatch(setUsers(users));
        return users;
      })
  }
}

export const setUsers = users => {
  return {type: SET_USERS, payload: users};
}

export const updateUser = user => {
  return {type: UPDATE_USER, payload: user};
}

export const addUser = user => {
  return { type: ADD_USER, payload: user};
}

export const editUser = id => {
  return { type: EDIT_USER, payload: id};
}
