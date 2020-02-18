import React, { Fragment } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

import {IndexPage} from './views'
import {AboutPage} from './views'
import './styles/app.scss'

function App () {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
        <Route path='/about' component={AboutPage} />
          <Route path='/' component={IndexPage} />
          <Route path='*' render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App