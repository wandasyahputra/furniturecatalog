
import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducer from '../redux/reducer'
import 'bootstrap/scss/bootstrap.scss'
import '../assets/styles/styles.scss'

const configureStore = (initialState) => {
  const enhancer = compose(applyMiddleware(thunkMiddleware, logger))
  return createStore(reducer, initialState, enhancer)
}

const Store = configureStore({})
class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={Store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
}

export default MyApp
