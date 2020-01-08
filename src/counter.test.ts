import { buildIncrementer, initialize } from './counter'

describe('initialize', () => {
  test('should set innerHTML of each element to 0', () => {
    const el1 = document.createElement('div')
    const el2 = document.createElement('h1')
    el2.innerHTML = '🤔'

    initialize([el1, el2])

    expect(el1.innerHTML).toEqual('0')
    expect(el2.innerHTML).toEqual('0')
  })
})

describe('buildIncrementor', () => {
  test('should return a function which increments all given counters', () => {
    const counters = [
      document.createElement('span'),
      document.createElement('a'),
    ]
    counters.forEach(el => el.innerHTML = '0')

    const increment = buildIncrementer(counters)

    increment()
    counters.forEach(el => expect(el.innerHTML).toEqual('1'))

    increment()
    counters.forEach(el => expect(el.innerHTML).toEqual('2'))
  })
})
