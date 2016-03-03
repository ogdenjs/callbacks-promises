// -----------------------------------------------------------------------------
// read the project file structure with async/await promises
// -----------------------------------------------------------------------------

import fs from 'fs-promise'
import path from 'path'

recursiveRead(path.resolve(__dirname, '..'))

async function recursiveRead (dir) {
  try {
    let files = await fs.readdir(dir)
    if (!files) return

    files.forEach(async file => {
      if (file.match(/node_modules|\.git/)) return

      file = `${dir}/${file}`
      let stats = await fs.lstat(file)

      if (stats.isFile()) {
        return console.log(file)
      }

      recursiveRead(file)
    })
  } catch (err) {
    console.log('error:', err)
  }
}
