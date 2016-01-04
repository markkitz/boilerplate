const React = require('react');
const uniloc = require('uniloc')
import Viewtest from './views/Viewtest.js'
import HomeView from './views/HomeView.js'
var routes = uniloc({
  root: 'GET /',
  homeRoute: 'GET /home',
  viewtestRoute: 'GET /viewtest'
  // documentList: 'GET /:userID/:documentID',
  // documentEdit: 'GET /:userID/:documentID/edit',
})

var routeViews = {};
routeViews['root'] = <HomeView />;
routeViews['homeRoute'] = <HomeView />;
routeViews['viewtestRoute'] = <Viewtest />;

module.exports = {routes:routes, routeViews:routeViews}
