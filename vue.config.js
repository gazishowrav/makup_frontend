module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'http://localhost/makeupfront/dist/'
      : '/'
}