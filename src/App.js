import React from 'react'
import Posts from './components/Posts.js'
import PostForm from './components/PostForm.js'
import { Provider } from 'react-redux'
import store from '../store.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from '../routes.js';


export default function App() {
    console.log('hellooo')
    return (
        <Provider store={store}>
            <Router>
                    <Route path="/posts" component={Posts} />
                    <Route path="/form" component={PostForm} />
            </Router>
        </Provider>
    )
}
