import React from 'react'
import {render} from '@testing-library/react'
import ReactDOM from 'react-dom'
import Todo from '../Todo'

it('renders without crashing', function() {
  const div = document.createElement('div')
  ReactDOM.render(<Todo />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', function() {
  const {asFragment} = render(<Todo />)
  expect(asFragment()).toMatchSnapshot()
})