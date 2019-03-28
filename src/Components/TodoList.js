import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../Actions'
import TodoListItem from './TodoListItem'

export class TodoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ''
  }

  handleInputChange = event =>
    this.setState({ addFormValue: event.target.value })

  handleFormSubmit = event => {
    const { addFormValue } = this.state
    const { addTodo } = this.props
    console.log('addTodo!!')
    event.preventDefault()
    addTodo({ title: addFormValue })
    this.setState({ addFormValue: '' })
  }

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state
    if (addFormVisible) {
      return (
        <div id='todo-add-form' className='todo-form'>
          <form onSubmit={this.handleFormSubmit}>
            <div className='input-field'>
              <p>icon</p>
              <input
                value={addFormValue}
                onChange={this.handleInputChange}
                id='todoNext'
                type='text'
              />
              <label htmlFor='todoNext'>What to do next?</label>
            </div>
          </form>
        </div>
      )
    }
  }

  renderTodos = () => {
    const { data } = this.props
    const todos = Object.entries(data)
    console.log(todos)
    todos.map((item, index) => (
      <TodoListItem key={index} todoId={index} todo={item} />
    ))
    if (todos.length < 1) {
      return todos
    }
    return <h4>You have completed all of your todos!</h4>
  }

  componentDidMount = () => this.props.fetchTodos()

  render() {
    const { addFormVisible } = this.state
    return (
      <div className='todo-list-container'>
        <div className='row'>
          {this.renderAddForm()}
          {this.renderTodos()}
        </div>
        <div className='fixed-action-button'>
          <button
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className='button'>
            {addFormVisible ? <p>icon minus</p> : <p>icon plus</p>}
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => ({
  data
})

export default connect(
  mapStateToProps,
  actions
)(TodoList)
