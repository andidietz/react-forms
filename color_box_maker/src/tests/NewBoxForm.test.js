import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom'
import NewBoxForm from '../NewBoxForm'

it('renders without crashing', function() {
  const div = document.createElement('div')
  ReactDOM.render(<NewBoxForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', function() {
  const {asFragment} = render(<NewBoxForm />)
  expect(asFragment()).toMatchSnapshot()
})

it('calls addBox function on form submit', function() {
    const makeMock = jest.fn()
   
    const {getByText} = render(<NewBoxForm addBox={makeMock}/>)
    const submit = getByText('Add Box')
    
    fireEvent.click(submit)
    expect(makeMock).toHaveBeenCalled()
})