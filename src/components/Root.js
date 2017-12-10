import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Provider} from 'react-redux';
import VisibleTodoList from './VisibleTodoList'
//const Home = () => ( <div><h2>Home</h2></div> )
const About = () => ( <div><h2>About</h2></div> )


const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={VisibleTodoList}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    </Provider>
);

export default Root;
