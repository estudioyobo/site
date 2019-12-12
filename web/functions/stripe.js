const fetch = require('node-fetch')

exports.handler = function (event, context, callback) {
  const { body, type } = event
  let error = null
  console.log(type)
  console.log(body)
  return fetch(process.env.DISCORD_WEBHOOK, {
    method: 'POST',
    body: {
      content: body,
      username: 'Stripe'
    }
  }).then(() => {
    callback(error, {
      statusCode: 200,
      body
    })
  })
}
