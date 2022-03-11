import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom'
import TodoList from '../TodoList'

function addTodo(todolist, task = 'test tests') {
  const todo = todolist.getByLabelText('Todo:')
  fireEvent.change(todo, { target: {value:task}})
  const submit = todolist.getByText('Add Todo')
  fireEvent.click(submit)
}

it('renders without crashing', function() {
  const div = document.createElement('div')
  ReactDOM.render(<TodoList />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', function() {
  const {asFragment} = render(<TodoList />)
  expect(asFragment()).toMatchSnapshot()
})

it('adds a todo to list', function() {
  const todolist = render(<TodoList />)
  addTodo(todolist)
  
  expect(todolist.getByText('test tests')).toBeInTheDocument()
})