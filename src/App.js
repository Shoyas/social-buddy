import React from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';
import SinglePost from './components/SinglePost/SinglePost';



function App() {

  

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts></Posts>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/seeDetails/:id">
            <PostDetail></PostDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
