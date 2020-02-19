import React, { Fragment} from 'react'
import { Redirect, Route } from 'react-router-dom'

import {  Header, Aside, Footer } from '../'

class PrivateRoute extends React.Component  {


render () {
  return (
    <Fragment>          
      <Header />
      <Aside />
      <Footer />
    </Fragment>
  )
}

  
}

export default PrivateRoute
