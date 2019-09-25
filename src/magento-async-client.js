var soap = require('soap');

module.exports = ({ url, credentials }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await soap.createClientAsync(url).then(client => client)
      client.login(credentials, (error, { loginReturn }) => {
        if (error) reject(error)
        else resolve((method, params, options) => {
          return new Promise((resolve, reject) => {
            client[method]({
              sessionId: loginReturn.$value,
              ...params
            }, (error, response) => {
              if (error) reject(error)
              else resolve(response)
            }, options)
          })
        })
      })

    } catch (error) {
      reject(error)
    }
  })
}
