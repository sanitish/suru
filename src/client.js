// "use strict"
// // REACT
// import React from 'react';
// import {render} from 'react-dom';
// import {Provider} from 'react-redux';
//
// import {applyMiddleware, createStore} from 'redux';
// //import logger from 'redux-logger'
// import thunk from 'redux-thunk';
//
// // IMPORT COMBINED REDUCERS
// import reducers from './reducers/index';
// // IMPORT ACTIONS
// import {addToCart} from './actions/cartActions';
// // STEP 1 create the store
// //const middleware = applyMiddleware(thunk, createLogger());
// //const store = createStore(reducers, middleware);
//
// import BooksList from './components/pages/bookslist';
// import Cart from './components/pages/cart';
// import BooksForm from './components/pages/booksForm';
// //import Main from './main';
//
// // REACT-ROUTER
// //import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Menu from './components/menu';
// import Footer from './components/footer';
//
// const Routes = (
//     <Provider store={store}>
//         <BrowserRouter>
//             <div>
//                 <Menu/>
//                 <Switch>
//                     <Route exact path="/" component={BooksList}/>
//                     <Route path="/admin" component={BooksForm}/>
//                     <Route path="/cart" component={Cart}/>
//                 </Switch>
//                 <Footer/>
//             </div>
//         </BrowserRouter>
//     </Provider>
// )
//
// render(Routes, document.getElementById('app'));
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from'./actions/cartActions';
// STEP 1 create the store
const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducers, middleware);
import BooksList from'./components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from'./components/pages/booksForm';
import About from'./components/pages/about';
import Contact from'./components/pages/contact';


import Main from './main';
const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList}/>
                <Route path="/admin" component={BooksForm}/>
                <Route path="/cart_item" component={Cart}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contact}/>
                <Route path="/cart_item" component={Cart}/>

              </Route>
        </Router>
    </Provider>
)
render(Routes, document.getElementById('app'));
