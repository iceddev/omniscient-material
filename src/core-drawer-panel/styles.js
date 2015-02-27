'use strict';

module.exports = {
  host: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  main: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,

    '& > *': {
      margin: 0,
      'min-height': '100%',
      left: 0,
      right: 0,
      'box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box'
    }
  },
  mainNarrow: {
    left: 0,
    padding: 0
  },
  mainNotSelected: {
    '& > #scrim': {
      visibility: 'visible',
      opacity: 1
    }
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    'will-change': 'transform',
    'box-sizing': 'border-box',
    '-moz-box-sizing': 'border-box',

    '& > *': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      'box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box'
    }
  },
  drawerTransition: {
    'transition': [
      '-webkit-transform ease-in-out 0.3s, width ease-in-out 0.3s',
      'transform ease-in-out 0.3s, width ease-in-out 0.3s'
    ]
  },
  drawerNotSelected: {
    '-webkit-transform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  scrim: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    'background-color': 'rgba(0, 0, 0, 0.3)',
    'visibility': 'hidden',
    opacity: 0,
    'transition': 'opacity ease-in-out 0.38s, visibility ease-in-out 0.38s'
  }
};
