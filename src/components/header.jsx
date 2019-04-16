import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div class="area"></div>
                <nav class="main-menu">
                <ul>
                    <li>
                        <a href="has-subnav">
                            <i class="fa fa-home fa-5x"></i>
                            <span class="nav-text"> Dashboard</span>
                        </a>
                    
                    </li>
                    
                    <li class="has-subnav">
                        <a href="#">
                        <i class="fa fa-list fa-5x"></i>
                            <span class="nav-text">Forms </span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#">
                            <i class="fa fa-bar-chart-o fa-5x"></i>
                            <span class="nav-text"> Reports</span>
                        </a>
                    </li>
                    
                    {/* <li>
                    <a href="#">
                        <i class="fa fa-table fa-2x"></i>
                            <span class="nav-text">
                                Tables
                            </span>
                        </a>
                    </li> */}
                    
                    <li>
                        <a href="#">
                        <i class="fa fa-info fa-5x"></i>
                        <span class="nav-text">Documentation </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Header;