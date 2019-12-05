const assert = require('assert')
const { add, subtract } = require('./calculator')

test('should add two numbers', () => {
        assert.equal(add(1, 2), 4)
})

test('should subtract two numbers', () => {
        assert.equal(subtract(3, 2), 1)
})