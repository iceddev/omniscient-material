'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');
var React = require('react');

var CoreDrawerPanel = require('../components/core-drawer-panel');

lab.experiment('CoreDrawerPanel', function() {
  lab.test('renders correctly', function(done) {
    var result = React.renderToStaticMarkup(React.createElement(CoreDrawerPanel));
    code.expect(result).to.equal('<div></div>');
    done();
  });
});