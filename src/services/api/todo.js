import http from './http'


const getTodoList = () => {
    return http({
      url: '/todo',
      method: 'GET'
    })
  }
  
  const createTodo = (data) => {
    return http({
      url: '/todo',
      method: 'POST',
      data
    })
  }
  
  const removeTodo = (id) => {
    return http({
      url: '/todo/' + id,
      method: 'DELETE'
    })
  }
  
  const updateTodo = (id, data) => {
    return http({
      url: '/todo/' + id,
      method: 'PUT',
      data
    })
  }

  const getAllDoneTodos = (data) => {
    return http({
      url: '/todo/done' + data,
      method: 'GET',
      data
    })
  }

  const getTodoById = (id, data) => {
    return http({
      url: '/todo/' + id,
      method: 'PUT',
      data
    })
  }
  
  export {
    getTodoList,
    createTodo,
    removeTodo,
    updateTodo,
    getAllDoneTodos,
    getTodoById
  }
  