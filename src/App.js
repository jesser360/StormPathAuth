import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';



ReactStormpath.init();

// ReactDOM.render(
class App extends Component {
  render() {
    return (
      <div>
      <h1>Testing from appLand </h1>
  <Router history={browserHistory}>
  <HomeRoute path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <Route path='/register' component={RegistrationPage} />
    <LoginRoute path='/login' component={LoginPage} />
    <AuthenticatedRoute>
    <HomeRoute path='/profile' component={ProfilePage} />
    </AuthenticatedRoute>
  </HomeRoute>
  </Router>
  </div>
  // document.getElementById('app-container')
  );
 }
}

export default App;
