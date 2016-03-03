// -----------------------------------------------------------------------------
// say hello with a promise
// -----------------------------------------------------------------------------

sayHello('Jason')
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
