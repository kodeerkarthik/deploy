import *as ActionTypes from '../Actions/types';

const initialState = {
  regmsg:'',
  loginmsg:'',
 user:[]
};

const reducer = (state = initialState, action) => {
  debugger
  const newState = { ...state };

if(action.type=='REG'){
  newState.regmsg=action.payload;
  
}
if(action.type=='LOGIN'){
  newState.loginmsg=action.payload;
}

if(action.type=='USER'){
  newState.user=action.payload;
}

      return newState;
  
};

export default reducer;
