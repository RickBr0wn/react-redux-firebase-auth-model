import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../Actions/index'

export class TodoListItem extends Component {
  handleCompletedClick = completedTodoId => {
    const { completeTodo } = this.props
    completeTodo(completedTodoId)
  }

  render() {
    const { todoId, todo } = this.props
    return (
      <div
        onClick={this.handleCompletedClick(todoId)}
        key='todoName'
        className='todo-item'>
        <h4>{todo.title}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => null

const mapDispatchToProps = { completeTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem)
