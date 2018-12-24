import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';

import Signup from '/imports/ui/Signup';
import Link from '/imports/ui/Link';
import NotFound from '/imports/ui/NotFound';
import Login from '/imports/ui/Login';

window.browserHistory = browserHistory;

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link}/>
    <Route path="*" component={NotFound}/>
   </Router>
);

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
