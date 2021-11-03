import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Name from './components/Form/Name'
import Work from './components/Form/Work'
import Project from './components/Form/Project'
import Budget from './components/Form/Budget'
import Details from './components/Form/Details'

const Routes = () => (
    <Router>
        <Switch>
          <Route exact path='/'                 component={ Home } />
          <Route exact path='/contact'          component={ Contact } />
          <Route exact path='/contact/name'     component={ Name } />
          <Route exact path='/contact/work'     component={ Work}  />
          <Route exact path='/contact/project'  component={ Project } />
          <Route exact path='/contact/budget'   component={ Budget } />
          <Route exact path='/contact/details'  component={ Details } />
        </Switch>
    </Router>
  )

export default Routes