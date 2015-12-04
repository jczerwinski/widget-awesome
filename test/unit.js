var test = require('tape')
var jsdom = require('jsdom')
var React = require('react')
var utils = require('react-addons-test-utils')
require('node-jsx').install({ 'extension': '.jsx' })
var LikeButton = require('../jsx/LikeButton.jsx')

test('LikeButton', function (t) {
  // Thanks https://github.com/jesstelford/react-testing-mocha-jsdom
  global.document = jsdom.jsdom('<body></body>')
  global.window = global.document.defaultView

  var buttonDoc = utils.renderIntoDocument(React.createElement(LikeButton))
  var button = utils.findRenderedDOMComponentWithTag(buttonDoc, 'button')
  t.false(button.disabled, 'Is enabled before clicking.')
  utils.Simulate.click(button)
  t.true(button.disabled, 'Is disabled once clicked.')
  t.end()
})
