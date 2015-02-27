'use strict';

var React = require('react');

var CoreDrawerPanel = require('../../src/core-drawer-panel');

var selected = 'main';

function open(e){
  e.stopPropagation();
  selected = 'drawer';
  render();
}

function close(){
  selected = 'main';
  render();
}

function render(){
  var Component = (
    <CoreDrawerPanel selected={selected}>
      <div key="drawer" data-drawer></div>

      <div key="main" data-main onClick={close}>
        <button onClick={open}>toggle drawer</button>
      </div>
    </CoreDrawerPanel>
  );

  React.render(Component, document.body);
}

render();
