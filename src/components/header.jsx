import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <title>Trial for Expense Tracker</title>
                <h1>Expense Tracker App</h1>
                <nav class="main-menu">
                <ul>
                    <li class="has-subnav">
                        <a class="active" href="">
                            <i class="fa fa-home fa-5x"></i>
                            <span class="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-list fa-5x"></i>
                            <span class="nav-text">Expenses </span>
                        </a>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-shopping-cart fa-5x"></i>
                            <span class="nav-text">Budget </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-bar-chart-o fa-5x"></i>
                            <span class="nav-text">Reports</span>
                        </a>
                    </li>
                </ul>
            </nav>
            </header>
           
        );
    }
}

export default Header;