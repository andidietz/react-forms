import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom'
import BoxList from '../BoxList'

function addBox(
    boxlist, 
    color = 'green',
     width = '1', 
     height ='2'
) {
  const color = boxlist.getByLabelText('Color:')
  const width = boxlist.getByLabelText('Width:')
  const height = boxlist.getByLabelText('Height:')

  fireEvent.change(color, { target: {value: color}})
  fireEvent.change(width, { target: {value: width}})
  fireEvent.change(height, { target: {value: height}})

  const submit = boxlist.getByText('Add Todo')
  fireEvent.click(submit)
}

it('renders without crashing', function() {
  const div = document.createElement('div')
  ReactDOM.render(<BoxList />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', function() {
  const {asFragment} = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot()
})

it('adds a box to list', function() {
  const boxlist = render(<BoxList />)
  addBox(boxlist)
  
  const removeButton = boxlist.getByText('X')
  expect(removeButton).toBeInTheDocument()
  expect(removeButton.previousSibling).toHaveStyle(`
  background-color: green;
  width: 1em;
  heigth:2em;
  `)
})