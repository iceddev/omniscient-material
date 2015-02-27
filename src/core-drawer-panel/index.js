'use strict';

var React = require('react');
var Mq = require('react-responsive');
var find = require('lodash.find');

var jss = require('jss');
var nested = require('jss-nested');
var useSheet = require('react-jss');

var styles = require('./styles');
var component = require('../../create-component');

jss.use(nested);

var mixins = [
  useSheet(styles),
  {
    getDefaultProps: function(){
      return {
        drawerWidth: 256,
        responsiveWidth: 640
      };
    }
  }
];

module.exports = component(mixins, function CoreDrawerPanel(props){
  var maxWidth = props.responsiveWidth;
  if(props.forceNarrow){
    maxWidth = '';
  }

  var drawerStyles = {
    width: props.drawerWidth
  };

  var mainClasses = this.classSet({
    main: true,
    mainNarrow: true, // TODO: if narrow
    mainNotSelected: props.selected !== 'main'
  });

  var drawerClasses = this.classSet({
    drawer: true,
    drawerTransition: true, // TODO: if transition
    drawerNotSelected: props.selected !== 'drawer'
  });

  var main = find(props.children, { key: 'main' });
  var drawer = find(props.children, { key: 'drawer' });

  var classes = this.sheet.classes;

  return React.createElement(Mq, { maxWidth: maxWidth, className: classes.host },
    React.createElement('div', { key: 'main', className: mainClasses, onClick: main.props.onClick },
      main,
      React.createElement('div', { id: 'scrim', key: 'scrim', className: classes.scrim })
    ),
    React.createElement('div', { key: 'drawer', style: drawerStyles, className: drawerClasses },
      drawer
    )
  );
});
