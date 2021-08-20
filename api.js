function forceram(userid) {
const https = require('https')
const options = {
  hostname: 'api.fallback.forcehost.net',
  port: 443,
  path: '/userram.php?id='+userid+'&key=5wEWOPekVE',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    return d
  })
})

 
req.on('error', error => {
  console.error(error)
})

req.end()
}
module.exports = forceram
console.log(forceram('722173687553458209'))


