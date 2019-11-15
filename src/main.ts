import { initialize, buildIncrementer } from './counter'

(() => {
  const button = document.querySelector('[data-behavior="trigger"]')
  if (!button) return

  const counters = Array.from(document.querySelectorAll('[data-behavior="counter"]'))

  initialize(counters)

  const increment = buildIncrementer(counters)

  button.addEventListener('click', increment)
})()
