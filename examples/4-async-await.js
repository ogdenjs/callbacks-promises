// -----------------------------------------------------------------------------
// say hello and follow up with async/await
// -----------------------------------------------------------------------------

function sayHello(name) {
  return new Promise((resolve, reject) => {
    console.log('Hello,', name)
    setTimeout(() => resolve(name), 1000)
  })
}

function followUp(name) {
  return new Promise((resolve, reject) => {
    console.log('How is', name, 'doing today?')
    setTimeout(() => resolve(name), 1000)
  })
}

(async function () {
  let name = 'Jason'

  await sayHello(name)
  await followUp(name)

  console.log('[ greeting to', name, 'was completed ]')
})()
