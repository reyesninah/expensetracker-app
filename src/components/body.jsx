import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import addExpense from "./addExpense";
import showExpense from "./showExpense";
import addCategory from "./addCategory"
import editCategory from "./editCategory";
import showCategory from "./showCategory";
import reportByMonth from "./reportByMonth"
import reportByCategory from "./reportByCategory"

import '../css/body.css';

class Body extends Component {

    render() {
        return (
            <HashRouter>
                <nav class="main-menu">
                    <ul>
                        <li class="dashboard">
                            <NavLink to="/">
                                <i class="fa fa-home fa-5x"></i>
                                <span class="nav-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li class="expenses">
                            <NavLink to="/expense">
                                <i class="fa fa-list fa-5x"></i>
                                <span class="nav-text">Expenses </span>
                                <i class="fa fa-angle-down fa-5x"></i>
                            </NavLink>
                            <ul class="sub-menu">
                                <li class="add-expense">
                                    <NavLink to="/expense-add-expense">
                                        <i class="fa fa-plus fa-5x"></i>
                                        <span class="nav-text">Add Transaction </span>
                                    </NavLink>
                                </li>
                                <li class="show-expense">
                                    <NavLink to="/expense-show-expense">
                                        <i class="fa fa-eye fa-5x"></i>
                                        <span class="nav-text">Show All </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="category">
                            <NavLink to="/category">
                                <i class="fa fa-shopping-cart fa-5x"></i>
                                <span class="nav-text">Category </span>
                                <i class="fa fa-angle-down fa-5x"></i>
                            </NavLink>
                            <ul class="sub-menu">
                                <li class="add-category">
                                    <NavLink to="/category-add-category">
                                        <i class="fa fa-plus fa-5x"></i>
                                        <span class="nav-text">Add Category </span>
                                    </NavLink>
                                </li>
                                <li class="edit-category">
                                    <NavLink to="/category-edit-category">
                                        <i class="fa fa-edit fa-5x"></i>
                                        <span class="nav-text">Edit Budget</span>
                                    </NavLink>
                                </li>
                                <li class="show-category">
                                    <NavLink to="/category-show-category">
                                        <i class="fa fa-eye fa-5x"></i>
                                        <span class="nav-text">Show All </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="reports">
                            <NavLink to="/reports">
                                <i class="fa fa-bar-chart-o fa-5x"></i>
                                <span class="nav-text">Reports</span>
                                <i class="fa fa-angle-down fa-5x"></i>
                            </NavLink>
                            <ul class="sub-menu">
                                <li class="report-category">
                                    <NavLink to="/reports-report-category">
                                        <i class="fa fa-folder fa-5x"></i>
                                        <span class="nav-text">By Category</span>
                                    </NavLink>
                                </li>
                                <li class="report-month">
                                    <NavLink to="/reports-report-month">
                                        <i class="fa fa-calendar fa-5x"></i>
                                        <span class="nav-text">By Month</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className="main-content">
                    {/* <Route path="/" component={Home} /> */}
                    <Route path="/expense-add-expense" component={addExpense} />
                    <Route path="/expense-show-expense" component={showExpense} />
                    <Route path="/category-add-category" component={addCategory} />
                    <Route path="/category-edit-category" component={editCategory} />
                    <Route path="/category-show-category" component={showCategory} />
                    <Route path="/reports-report-category" component={reportByCategory} />
                    <Route path="/reports-report-month" component={reportByMonth} />
                </div>

            </HashRouter>

        );
    }
}

export default Body;