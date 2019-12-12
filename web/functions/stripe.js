const fetch = require('node-fetch')

exports.handler = function (event, context, callback) {
  const {
    body: { data, type }
  } = event
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

  return fetch(process.env.DISCORD_WEBHOOK, {
    method: 'POST',
    body: {
      content,
      username: 'Stripe'
    }
  }).then(() => {
    callback(null, {
      statusCode: 200
    })
  })
}
