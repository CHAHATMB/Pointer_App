import React from 'react';
import './App.css';
import Sem from './Select_sem';
import Cal from './calculate';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Sem}/>
            <Route path="/sem/:id" component={Cal}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
