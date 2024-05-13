import React from 'react';
import './App.css';
import { Component } from 'react';
import{ BrowserRouter,Route, Switch } from "react-router-dom";
import About from'./containers/About';
import Member from './containers/member/Member';
import MemberEdit from "./containers/member/MemberEdit";
import Home from './containers/Home';

class App extends Component {
  
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/members" component={Member} />
        <Route exact path="/members/add" component={MemberEdit} />
        <Route exact path="/members/edit/:id" component={MemberEdit} />
      </Switch>
    )
  }

  render () {
    return (
     <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );  
  }
}

export default App;