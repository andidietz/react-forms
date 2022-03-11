import React from 'react'
import {render} from '@testing-library/react'
import ReactDOM from 'react-dom'
import Box from '../Box'

it('renders without crashing', function() {
  const div = document.createElement('div')
  ReactDOM.render(<Box />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', function() {
  const {asFragment} = render(<Box />)
  expect(asFragment()).toMatchSnapshot()
})