import {
  GET_TODO_SUCCESS,
  GET_TODO_FETCHING,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FETCHING,
  REMOVE_TODO_BY_ID_SUCCESS,
  REMOVE_TODO_BY_ID_FETCHING,
  UPDATE_TODO_BY_ID_FETCHING,
  UPDATE_TODO_BY_ID_SUCCESS,
  ACTIVE_TODO_FETCHING,
  ACTIVE_TODO_SUCCESS,
  COMPLETED_TODO_FETCHING,
  COMPLETED_TODO_SUCCESS
  } from '../types'
  
  
  const initialState = {
    list: [],
    isFetching: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_TODO_FETCHING:
        return {
          ...state,
          isFetching: action.payload
        }
      case GET_TODO_SUCCESS:
        return {
          ...state,
          list: 
            action.payload
        }
      case CREATE_TODO_FETCHING:
        return {
          ...state,
          isFetching: action.payload
        }
      case CREATE_TODO_SUCCESS:
        return {
            ...state,
            list: [
              ...state.list,
              action.payload
            ]
          }
      case UPDATE_TODO_BY_ID_FETCHING:
        return {
          ...state,
          isFetching: action.payload
        }
      case UPDATE_TODO_BY_ID_SUCCESS:
        var index = state.list.findIndex(i => i._id === action.payload._id)
        return {
          ...state,
          list: [
            ...state.list.slice(0, index),
            action.payload,
            ...state.list.slice(index + 1)
          ]
        }    
        case REMOVE_TODO_BY_ID_FETCHING:
          return{
            ...state,
            isFetching: action.payload
          }
        case REMOVE_TODO_BY_ID_SUCCESS:
          index = state.list.findIndex(i => i.id === action.payload)
          return {
            ...state,
            list: [
              ...state.list.slice(0, index),
              ...state.list.slice(index + 1)
            ]
          }
        case ACTIVE_TODO_FETCHING:
          return {
            ...state,
            isFetching: action.payload
          }
        case ACTIVE_TODO_SUCCESS:
          return {
            ...state,
            list : state.list.filter(o => o.done !== true)
        }
        case COMPLETED_TODO_FETCHING:
        return {
          ...state,
          isFetching: action.payload
        }
        case COMPLETED_TODO_SUCCESS:
          return {
          ...state,
          list : state.list.filter(o => o.done !== false)
        }
        default:
          return state
    }
  }
  