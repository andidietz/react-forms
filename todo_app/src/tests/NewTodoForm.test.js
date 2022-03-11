import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom'
import NewTodoForm from './NewTodoForm'

it('renders without crashing', function() {
  const div = document.createElement('div')
  ReactDOM.render(<NewTodoForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', function() {
  const {asFragment} = render(<NewTodoForm />)
  expect(asFragment()).toMatchSnapshot()
})

it('calls addTodo function on form submit', function() {
    const makeMock = jest.fn()
   
    const {getByText} = render(<NewTodoForm addTodo={makeMock}/>)
    const submit = getByText('Add Todo')
    
    fireEvent.click(submit)
    expect(makeMock).toHaveBeenCalled()
})