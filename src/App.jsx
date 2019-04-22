import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      expenseItem = "",
      expenseCategory = "",
      expenseAmount = "",
      expenseDate = ""
    };
  }

  handleChangeInfo = e =>{
    const{} = e.target;

    this.setState((prevState) => ({
      
    }));

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
