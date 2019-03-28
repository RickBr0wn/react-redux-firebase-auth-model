import { todosRef } from '../Config/firebase'
import { FETCH_TODOS } from './types'

export const addTodo = newTodo => async dispatch => todosRef.push().set(newTodo)

export const completeTodo = completeTodoId => async dispatch =>
  todosRef.child(completeTodoId).remove()

export const fetchTodos = () => async dispatch =>
  todosRef.on('value', snapshot =>
    dispatch({ type: FETCH_TODOS, payload: snapshot.val })
  )
