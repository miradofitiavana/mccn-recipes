import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

// export const store = createStore(reducers, applyMiddleware(thunk))
export const store = createStore(reducers, applyMiddleware(thunk, logger))

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
