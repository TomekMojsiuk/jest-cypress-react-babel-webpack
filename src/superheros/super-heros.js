const superHeros = [
  {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Blazestone', powers: ['control of fite', 'pyrotechnic discharges']},
  {name: 'Frozone', powers: ['freeze water']},
  {name: 'Mr. Incredible', powers: ['physical strength']},
  {name: 'Elastigirl', powers: ['physical stretch']},
  {name: 'Violet', powers: ['invisibility', 'forcefield']},
  {name: 'Dash', powers: ['speed']},
  {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
]

export function getFlyingHeros() {
  return superHeros.filter(hero => {
    return hero.powers.includes('fly')
  })
}
