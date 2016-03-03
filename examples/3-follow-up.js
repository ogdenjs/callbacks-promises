// -----------------------------------------------------------------------------
// say hello and follow up with promises
// -----------------------------------------------------------------------------

sayHello('Jason')
  .then(followUp)
  .then(function(name) {
    console.log('[ greeting to', name, 'was completed ]')
  })

function sayHello(name) {
  return new Promise(function(resolve, reject) {
    console.log('Hello,', name)

    setTimeout(function() {
      resolve(name)
    }, 1000)
  })
}

function followUp(name) {
  return new Promise(function(resolve, reject) {
    console.log('How is', name, 'doing today?')

    setTimeout(function() {
      resolve(name)
    }, 1000)
  })
}
