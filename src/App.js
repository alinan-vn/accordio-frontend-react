import './scss/main.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from './components/global/navigation/index'


function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        {/* <Route exact path='/' component={} />
        <Route exact path='/' component={} />
        <Route exact path='/' component={} /> */}
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
