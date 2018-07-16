'use strict'

/*
* Example
*/

const url = require('url')


module.exports.image = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log('CloudEvent Received:')
  console.log(cloudevent)
  console.log('')

  return func1(objurl,  callback)
}


/*
* Function
*/

function func1(objurl, callback) {
  https.get(url.parse(objurl), function(res) {
    var data = []

        console.log(text)

  }
}
