const React = require('react');
const {connect} = require('react-redux');
import Viewtest from '../views/Viewtest.js'
let Router = ({routes, routeViews, routeName}) => {
  let view = routeViews[routeName]
  if(view == null)
  {
    view = routeViews['root']
  }
  return (<div>
    <div>{view}</div>
    </div>)
}
Router = connect((state) => {
  console.log(state, state.navigationReducer.routeName)
  return{routeName:state.navigationReducer.routeName}})(Router)
//export Router

var routeHashWatcher = {
  watch: (dispatch, routes) => {
    window.addEventListener('hashchange',() => {
      dispatch(navigationComplete(routes))
    } , false);
  }
}
function navigationComplete(routes) {
  return {
    type: 'NAVIGATION/COMPLETE',
    route: routes.lookup(window.location.hash.substr(1)),
  }
}

module.exports = {Router:Router, routeHashWatcher:routeHashWatcher }
