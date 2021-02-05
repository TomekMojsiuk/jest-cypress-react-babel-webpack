import React from 'react'
import {render} from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

describe('Run tests', () => {
  test('renders AutoScalingText', () => {
    render(<AutoScalingText />)
  })
  test('run debug', () => {
    /* DESC The className prop doesn't show in the debugger because we replaced all .css files with an empty mocked module. 
    /  for the class name to show in debugger, we have to install identity-obj-proxy module and update jest.config file.
    /  The case occurs only if we use css-modules in our project. ClassName declared as string will appear normally.   
    */
    const {debug} = render(<AutoScalingText />)
    debug()
  })
})
