export function sleep(ms = 500) {
  new Promise((resolver) => {
    setTimeout(resolver, ms)
  })
}
