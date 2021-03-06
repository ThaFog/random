import ow from 'ow-lite'

export default (random, mu = 0, sigma = 1) => {
  ow(mu, ow.number)
  ow(sigma, ow.number)

  return () => {
    let x, y, r

    do {
      x = random.next() * 2 - 1
      y = random.next() * 2 - 1
      r = x * x + y * y
    } while (!r || r > 1)

    return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r)
  }
}
