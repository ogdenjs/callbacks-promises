// -----------------------------------------------------------------------------
// say hello with a callback
// -----------------------------------------------------------------------------

sayHello('Jason', function(name) {
  console.log('[ greeting to', name, 'was completed ]')
})

function sayHello(name, callback) {
  console.log('Hello,', name)

  setTimeout(function() {
    callback(name)
  }, 1000)
}
