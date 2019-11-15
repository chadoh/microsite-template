const initial = 0

export const initialize = (counters: Element[]) => {
  counters.forEach(counter => {
    counter.innerHTML = String(initial)
  })
}

export const buildIncrementer = (counters: Element[]) => () => {
  counters.forEach(counter => {
    const currentValue = parseInt(counter.innerHTML)
    counter.innerHTML = String(currentValue + 1)
  })
}
