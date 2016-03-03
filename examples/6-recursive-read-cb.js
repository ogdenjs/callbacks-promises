// -----------------------------------------------------------------------------
// read the project file structure with callbacks
// -----------------------------------------------------------------------------

var fs = require('fs')
var path = require('path')

recursiveRead(path.resolve(__dirname, '..'))

function recursiveRead(dir) {
  fs.readdir(dir, function(err, files) {
    if (err) return console.log('error:', err)
    else if (!files) return

    files.forEach(function(file) {
      if (file.match(/node_modules|\.git/)) return

      file = `${dir}/${file}`

      fs.lstat(file, function(err, stats) {
        if (err) return console.log('error:', err)

        if (stats.isFile()) {
          return console.log(file)
        }

        recursiveRead(file)
      })
    })
  })
}
