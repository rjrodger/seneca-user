/* Copyright (c) 2019-2020 Richard Rodger and other contributors, MIT License */
'use strict'

const Seneca = require('seneca')

module.exports = {
  LN: () =>
    ',LN:' +
    new Error().stack
      .split('\n')[2]
      .match(/\/([^.\/]+)[^\/]*\.js:(\d+):/)
      .filter((x, i) => i == 1 || i == 2)
      .join('~'),

  make_seneca: () => {
    // TODO: hide logs of expected errors
    var seneca = Seneca({ legacy: false })
      .test()
      .use('promisify')
      .use('doc')
      .use('joi')
      .use('entity')
      .use('..', {
        password: {
          minlen: 3
        }
      })
    return seneca
  }
}
