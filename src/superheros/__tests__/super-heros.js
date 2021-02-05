import {getFlyingHeros} from '../super-heros'

test('returns super heros that can fly', () => {
  // DESC put in data manually into toEqual()
  const flyingHeros = getFlyingHeros()
  expect(flyingHeros).toEqual([
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Apogee', powers: ['gravity control', 'fly']},
    {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
  ])
})

test('returns super heros that can fly - match snapshot', () => {
  // DESC compare data to a snapshot
  const flyingHeros = getFlyingHeros()
  expect(flyingHeros).toMatchSnapshot()
})
