import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './store'

	
import './fonts/FiraSans/FiraSans-Bold.ttf'
import './fonts/FiraSans/FiraSans-Regular.ttf'
import './fonts/FiraSans/FiraSans-Medium.ttf'
import './fonts/FiraSans/FiraSans-Light.ttf'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
