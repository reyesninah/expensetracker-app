import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            expTransact: []
        };
    }

    render() {
        return (
            <header>
                <title>Trial for Expense Tracker</title>
                <h1>EXTRA Expense Tracker</h1>
            </header>

        );
    }
}

export default Header;