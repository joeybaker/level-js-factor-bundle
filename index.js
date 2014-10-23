var leveljs = require('level-js')
  , store = leveljs('store')
  // just so common has somethong common to require
  , url = require('url')

store.open(function onOpen(){
  console.log('opened store')
})
