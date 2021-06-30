import React from 'react'
import Form from './pages/Create';
import Home from './pages/Home';
import Update from './pages/Update';
import { ProfilePage } from './pages/ProfilePage';
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route  exact path="/create-profile" component={Form} />
        <Route exact path="/show-profile/:id" component={ProfilePage}/>
        <Route exact path="/update-profile/:id" component={ Update}/>
      </Router>
      
    </>
  );
}

export default App;
