import React from 'react'
import PropTypes from 'prop-types'
import {render} from 'calculator-test-utils'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../../themes'
import CalculatorDisplay from '../calculator-display'
import Calculator from 'calculator'

test('renders Calculator with theme provider', () => {
  const {container, rerender} = render(
    <ThemeProvider theme={dark}>
      <CalculatorDisplay value="0" />
    </ThemeProvider>,
  )

  rerender(
    <ThemeProvider theme={dark}>
      <Calculator value="1" />
    </ThemeProvider>,
  )

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
      class="calculator"
    >
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
      <div
        class="calculatorKeypad"
      >
        <div
          class="inputKeys"
        >
          <div
            class="functionKeys"
          >
            <button
              class="calculatorKey keyClear"
            >
              AC
            </button>
            <button
              class="calculatorKey keySign"
            >
              ±
            </button>
            <button
              class="calculatorKey keyPercent"
            >
              %
            </button>
          </div>
          <div
            class="digitKeys"
          >
            <button
              class="calculatorKey key0"
            >
              0
            </button>
            <button
              class="calculatorKey keyDot"
            >
              ●
            </button>
            <button
              class="calculatorKey key1"
            >
              1
            </button>
            <button
              class="calculatorKey key2"
            >
              2
            </button>
            <button
              class="calculatorKey key3"
            >
              3
            </button>
            <button
              class="calculatorKey key4"
            >
              4
            </button>
            <button
              class="calculatorKey key5"
            >
              5
            </button>
            <button
              class="calculatorKey key6"
            >
              6
            </button>
            <button
              class="calculatorKey key7"
            >
              7
            </button>
            <button
              class="calculatorKey key8"
            >
              8
            </button>
            <button
              class="calculatorKey key9"
            >
              9
            </button>
          </div>
        </div>
        <div
          class="operatorKeys"
        >
          <button
            class="calculatorKey keyDivide"
          >
            ÷
          </button>
          <button
            class="calculatorKey keyMultiply"
          >
            ×
          </button>
          <button
            class="calculatorKey keySubtract"
          >
            −
          </button>
          <button
            class="calculatorKey keyAdd"
          >
            +
          </button>
          <button
            class="calculatorKey keyEquals"
          >
            =
          </button>
        </div>
      </div>
    </div>
  `)
})

function Wrapper({children}) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

test('renders Calculator with theme provider moved to a separate function and passed into calculator as a wrapper object', () => {
  const {container} = render(<CalculatorDisplay value="0" />, {
    wrapper: Wrapper,
  })

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
