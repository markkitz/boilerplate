// The reducer to manage navigation-related state
function navigationReducer(state = {
  location: null,
}, action) {
  switch (action.type) {
    case 'NAVIGATION/COMPLETE':
    console.log(action)
      return {
        routeName: action.route.name,
      }

    default:
      return state
  }
}
export default navigationReducer
