'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const missedConnectionApi = () => {
  return $.ajax({
    url: config.apiUrl + '/connections',
    method: 'GET'
  })
}

const missedConnectionSubmit = (data1) =>
  $.ajax({
    url: config.apiUrl + '/connections',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'connection': data1
    }
  })

const missedConnectionMe = (data2) =>
  $.ajax({
    url: config.apiUrl + '/my_attrs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'connection': data2
    }
  })

const get1Lonely = id => {
  console.log(id.ID)
  const lonelyId = id.ID
  return $.ajax({
    url: config.apiUrl + '/connections/' + lonelyId,
    method: 'GET'
  })
}

const loveOneLonely = id => {
  console.log(id.ID)
  const lonelyId2 = id.ID
  return $.ajax({
    url: config.apiUrl + '/connections/' + lonelyId2,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    id
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  missedConnectionApi,
  missedConnectionSubmit,
  missedConnectionMe,
  get1Lonely,
  loveOneLonely
}
