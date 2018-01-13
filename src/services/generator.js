const generator = {
  randomId: function (length) {
    var pool = 'abcdefghijklmnopqrstuvwxyz0123456789'
    var id = ''
    for (var i = 0; i < length; i++) {
      id += pool.charAt(Math.floor(Math.random() * pool.length))
    }
    return id
  }
}

export default generator
