export const getImg = (path) => {
  const image = require.context('~/assets/image/', false, /\.png|\.jpg\.svg|$/)
  return image(`./${path}`)
}
