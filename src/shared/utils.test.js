import { getFormattedValue } from './utils'
/*
* For the test to work we updated babelrc config
*/
test('formats the value', () => {
    expect(getFormattedValue('1234.0')).toBe('1,234.0');
})