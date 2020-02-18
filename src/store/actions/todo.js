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
  import axios from 'axios'
  axios.defaults.baseURL = 'https://lab.dev.cogniteq.com/api'
  axios.defaults.headers.common['token'] = window.localStorage.getItem('token')
  axios.defaults.params = {}
  


  const retrieveTodos = () => dispatch =>{
    dispatch({
      type: GET_TODO_FETCHING,
      payload: true
    })
    return axios.get('/todo',{
      headers: {
        'token': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }})
    .then (response=> {
      console.log(response.data)
      if (response.data) {
        console.log(response.data)
        dispatch({
          type: GET_TODO_SUCCESS,
          payload: response.data
        })
      }
      dispatch({
        type: GET_TODO_FETCHING,
        payload: false
      })
    })
    .catch(error =>{
      console.log(error)
    }
  )}

  const addTodo = (data) => dispatch => {
    dispatch({
      type: CREATE_TODO_FETCHING,
      payload: true
    })
    return axios.post('/todo',{
      title: data.title,
      description: data.title
    },
    {
      headers: {
        'token': window.localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=UTF-8'
    }})
    .then (response=> {
      console.log(response.data)
      if (response.data) {
        console.log(response.data)
          dispatch({
            type: CREATE_TODO_SUCCESS,
            payload: response.data
          })
        }
        dispatch({
          type: CREATE_TODO_FETCHING,
          payload: false
        })
      })
  }
  
  const deleteTodo = (data) => dispatch => {
    dispatch({
      type: REMOVE_TODO_BY_ID_FETCHING,
      payload: true
    })
    return axios.delete('/todo/' + data,
    { data: {id: data}
    })
    .then (response=> {
      console.log(response.data)
      if (response.data) {
        console.log(response.data)
          dispatch({
            type: REMOVE_TODO_BY_ID_SUCCESS,
            payload: data._id
          })
        }
        dispatch({
          type: REMOVE_TODO_BY_ID_FETCHING,
          payload: false
        })
      })
  }
  
  const updateTodo = (data) => dispatch => {
    dispatch({
      type: UPDATE_TODO_BY_ID_FETCHING,
      payload: true
    })
    return axios.put('/todo/' + data._id,{
      done: data.done,
      title: data.title,
      description: data.title
    },
    {
      headers: {
        'token': window.localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=UTF-8'
    }})
    .then (response=> {
      console.log(response.data)
      if (response.data) {
        console.log(response.data)
          dispatch({
            type: UPDATE_TODO_BY_ID_SUCCESS,
            payload: data
          })
        }
        dispatch({
          type: UPDATE_TODO_BY_ID_FETCHING,
          payload: false
        })
      })
  }
  

  const activeTodo = (id, data) => dispatch => {
    dispatch({
      type: ACTIVE_TODO_FETCHING,
      payload: true
    })
    return axios.get('/todo/done/true',{
      headers: {
        'token': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }})
    .then (response=> {
      console.log(response.data)
      if (response.data) {
        console.log(response.data)
          dispatch({
            type: ACTIVE_TODO_SUCCESS,
            payload: response.data
          })
        }
        dispatch({
          type: ACTIVE_TODO_FETCHING,
          payload: false
        })
      })
  }
  
  const completedTodo = (id, data) => dispatch => {
    dispatch({
      type: COMPLETED_TODO_FETCHING,
      payload: true
    })
    return axios.get('/todo/done/false',{
      headers: {
        'token': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }})
    .then (response=> {
      console.log(response.data)
      if (response.data) {
        console.log(response.data)
          dispatch({
            type: COMPLETED_TODO_SUCCESS,
            payload: response.data
          })
        }
        dispatch({
          type: COMPLETED_TODO_FETCHING,
          payload: false
        })
      })
  }
  

  export {
    addTodo,
    updateTodo,
    deleteTodo,
    activeTodo,
    completedTodo,
    retrieveTodos
  }
  