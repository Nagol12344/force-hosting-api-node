function forceram(userid, key) {
const https = require('https')
const options = {
  hostname: 'api.fallback.forcehost.net',
  port: 443,
  path: '/userram.php?id='+userid+'&key='+key,
  method: 'GET'
}

const req = https.request(options, res => {


  res.on('data', d => {
    return d
  })
})

 
req.on('error', error => {
  console.error(error)
})

req.end()
}
exports.ramcheck = forceram()

function forcecpu(userid, key) {
  const https = require('https')
  const options = {
    hostname: 'api.fallback.forcehost.net',
    port: 443,
    path: '/usercpu.php?id='+userid+'&key='+key,
    method: 'GET'
  }
  
  const req = https.request(options, res => {
  
  
    res.on('data', d => {
      return d
    })
  })
  
   
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()
  }

  exports.cpucheck = forcecpu()


  function forcedisc(userid, key) {
    const https = require('https')
    const options = {
      hostname: 'api.fallback.forcehost.net',
      port: 443,
      path: '/userdisc.php?id='+userid+'&key='+key,
      method: 'GET'
    }
    
    const req = https.request(options, res => {
    
    
      res.on('data', d => {
        return d
      })
    })
    
     
    req.on('error', error => {
      console.error(error)
    })
    
    req.end()
    }

    exports.disccheck = forcedisc()

    function forceslots(userid, key) {
      const https = require('https')
      const options = {
        hostname: 'api.fallback.forcehost.net',
        port: 443,
        path: '/userslots.php?id='+userid+'&key='+key,
        method: 'GET'
      }
      
      const req = https.request(options, res => {
      
      
        res.on('data', d => {
          return d
        })
      })
      
       
      req.on('error', error => {
        console.error(error)
      })
      
      req.end()
      }
      exports.slotcheck = forceslots
      exports.api = function api() {
       console.log('Dont use this') 
      }