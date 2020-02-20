import React, { Fragment } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

import {IndexPage, AboutPage ,CareerPage, PortfolioPage} from './views'
import { Header,Footer,Aside } from './components'

import './styles/app.scss'

function App () {
  return (
    <div class='wrapper' >
      <Header />
      <main className='main'>
      <Router history={history}>
        <Aside></Aside>
        <Switch>
          
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/career' component={CareerPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/' component={IndexPage} />
          <Route path='*' render={() => <div>404</div>} />
        </Switch>
        
      </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App