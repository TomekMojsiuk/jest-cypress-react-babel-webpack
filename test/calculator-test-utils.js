import React from 'react'
import PropTypes from 'prop-types'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options} = {}) {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
// DESC override the built-in render with our own in common directory so we can use it anywhere in the project
export {render}
