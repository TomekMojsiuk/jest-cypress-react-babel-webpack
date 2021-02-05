import React from 'react'
// DESC regular import:
// import {render} from '../../../test/calculator-test-utils'
// DESC import after adding 'test' directory to moduleDirectories in jest.config.js:
import {render} from 'calculator-test-utils'
import * as themes from '../../themes'
import CalculatorDisplay from '../calculator-display'

test('renders <CalculatorDisplay /> with light theme', () => {
  const {container} = render(<CalculatorDisplay value="0" />, {
    // DESC after making theme field accept different values in calculator-test-utils, we can now test different theme scenarios.
    theme: themes.light,
  })

  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: #1c191c;
      background: white;
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

test('renders <CalculatorDisplay /> with dark theme', () => {
  const {container} = render(<CalculatorDisplay value="0" />, {
    // DESC after making theme field accept different values in calculator-test-utils, we can now test different theme scenarios.
    theme: themes.dark,
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
