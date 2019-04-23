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
    const{name, value} = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {

    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
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
