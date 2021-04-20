import './scss/main.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from './components/global/navigation/index'

import CreateAccount from './components/create-account/index'
import EmailVerification from './components/create-account/email-verification/index'

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/email-verification' component={EmailVerification} />
      </ BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
