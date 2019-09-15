import *as ActionTypes from './types.js';

export function register(data){
   console.log("action")
    return function(dispatch){
        dispatch({type:"REG",payload:data});
    }
}

export function login(data){
    console.log("login action")
     return function(dispatch){
         dispatch({type:"LOGIN",payload:data});
     }
 }

 export function oneuser(data){
    console.log("oneuser action")
    return function(dispatch){
        dispatch({type:"USER",payload:data});
    }
}