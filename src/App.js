import './scss/main.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from './components/global/navigation/index'
import CreateAccount from './components/create-account/index'


function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Route exact path='/create-account' component={CreateAccount} />
        {/* <Route exact path='/' component={} /> */}
      </ BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
