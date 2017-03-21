import {applyMiddleware,createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

import Reducer from './reducer.js'


var store=createStore(Reducer,applyMiddleware(thunkMiddleware));


// if (module.hot) {
//     module.hot.accept("./reducer", () => {
//       const nextReducer = require("./reducer").default;
//       store.replaceReducer(nextReducer);
//     });
//   }

export default store;