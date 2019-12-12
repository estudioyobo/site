const fetch = require('node-fetch')

exports.handler = function (event, context, callback) {
  console.log('event', event)
  const { body } = event
  const { type, data } = JSON.parse(body)
  let content = `
  Tipo: ${type}

  ${JSON.stringify(data, null, 4)}
  `
  // switch (type) {
  //   case 'customer.updated':
  //     content =
  //     break;

  //   default:
  //     break;
  // }

  console.log(process.env.DISCORD_WEBHOOK)
  console.log(content)

  const headers = {
    'Content-Type': 'application/json'
  }

  fetch(process.env.DISCORD_WEBHOOK, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      content,
      username: 'Stripe'
    })
  })
    .then(e => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(e)
      })
    })
    .catch(e => {
      callback(e.message, {
        statusCode: 500
      })
    })
}
