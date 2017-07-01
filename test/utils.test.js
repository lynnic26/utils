let should = require('chai').should();
let utils = require('../lib/utils.js');
describe('utils:tool method test', () => {
  it('Add correct', () => {
    utils.add(1, 2).should.equal(3);
  });
});