import React from 'react'
import PropTypes from 'prop-types'
import {render as RTLrender} from 'calculator-test-utils'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../../themes'
import CalculatorDisplay from '../calculator-display'

function Wrapper({children}) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

function render(ui, options) {
  return RTLrender(ui, {wrapper: Wrapper, ...options})
}

test('renders <CalculatorDisplay /> with custom RTLrender and all providers included in it', () => {
  const {container} = render(<CalculatorDisplay value="0" />)

  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: white;
      background: #1c191c;
    }

    <div
      class="emotion-0 emotion-1"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
