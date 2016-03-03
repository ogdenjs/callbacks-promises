// -----------------------------------------------------------------------------
// read the project file structure with callbacks
// -----------------------------------------------------------------------------

import fs from 'fs'
import path from 'path'

recursiveRead(path.resolve(__dirname, '..'))

function recursiveRead(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) return console.log('error:', err)
    else if (!files) return

    files.forEach(file => {
      if (file.match(/node_modules|\.git/)) return

      file = `${dir}/${file}`

      fs.lstat(file, (err, stats) => {
        if (err) return console.log('error:', err)

        if (stats.isFile()) {
          return console.log(file)
        }

        recursiveRead(file)
      })
    })
  })
}
