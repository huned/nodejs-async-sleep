'use strict'

const assert = require('assert')
const asyncSleep = require('../')

describe('async sleep', function () {
  it('returns a promise', function () {
    const retVal = asyncSleep(100) // NOTE: no `await` here
    assert.strictEqual(typeof retVal.then, 'function')
  })

  // NOTE: probably a better way to do this.
  it('sleeps the correct duration', async function () {
    const startTime = (new Date()).getTime()
    const delayMs = 75
    const expectedEndTime = startTime + delayMs

    await asyncSleep(delayMs)

    const actualEndTime = (new Date()).getTime()
    const delta = actualEndTime - expectedEndTime

    assert.ok(delta <= 10) // Accommodate some margin...
  })
})
