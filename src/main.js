const React = require('react')
const ReactDOM = require('react-dom')
const ReactRedux = require('react-redux')
const Redux = require('redux')
const thunk = require('redux-thunk')
const uniloc = require('uniloc')
const {connect} = require('react-redux')
import {Router, routeHashWatcher} from './router'
import navigationReducer from './reducers/navigationReducer.js'
import Viewtest from './views/Viewtest.js'
import {routes, routeViews} from './routes.js'

console.log(Router, routeHashWatcher)

const render = () => {
  console.log('render location', window.location.hash);
	ReactDOM.render(
        (<Provider store={store}>
          <div>
          <NavPanel />
          <Router routes={routes} routeViews={routeViews} />
          </div>
        </Provider>)
		, document.getElementById('root')
	);
};

const NavPanel = () => {
  return (
        <ul>
          <li><a href="#/home">home</a></li>
          <li><a href="#/viewtest">viewtest</a></li>

        </ul>)
}


const {Provider} = ReactRedux;
const {createStore, combineReducers, applyMiddleware} = Redux;
const App = combineReducers({navigationReducer});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
var store = createStoreWithMiddleware(App);

store.subscribe(render);
render();
routeHashWatcher.watch(store.dispatch, routes)
