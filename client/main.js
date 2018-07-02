import './main.html'
import { Meteor } from 'meteor/meteor';
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom
import App from '../imports/App';
import holdingmain from '../imports/holdingmain'
import watchlistmain from '../imports/watchlistmain'


Meteor.startup(() => {
  render(<App/>, document.getElementById('app'));
});