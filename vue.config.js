module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vuejs-vio/dist/'
      : './'
  }