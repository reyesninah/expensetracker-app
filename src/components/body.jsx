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

import {
    getCategoryList, getExpenseList
  } from '../util/service-helper';

class Body extends Component {

    render() {
        return (
            <HashRouter>
                <nav className="main-menu">
                    <ul>
                        <li className="dashboard">
                            <NavLink to="/">
                                <i className="fa fa-home fa-5x"></i>
                                <span className="nav-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="expenses">
                            <NavLink to="/expense">
                                <i className="fa fa-list fa-5x"></i>
                                <span className="nav-text">Expenses </span>
                                <i className="fa fa-angle-down fa-5x"></i>
                            </NavLink>
                            <ul className="sub-menu">
                                <li className="add-expense">
                                    <NavLink to="/expense-add-expense">
                                        <i className="fa fa-plus fa-5x"></i>
                                        <span className="nav-text">Add Transaction </span>
                                    </NavLink>
                                </li>
                                <li className="show-expense">
                                    <NavLink to="/expense-show-expense">
                                        <i className="fa fa-eye fa-5x"></i>
                                        <span className="nav-text">Show All </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="category">
                            <NavLink to="/category">
                                <i className="fa fa-shopping-cart fa-5x"></i>
                                <span className="nav-text">Category </span>
                                <i className="fa fa-angle-down fa-5x"></i>
                            </NavLink>
                            <ul className="sub-menu">
                                <li className="add-category">
                                    <NavLink to="/category-add-category">
                                        <i className="fa fa-plus fa-5x"></i>
                                        <span className="nav-text">Add Category </span>
                                    </NavLink>
                                </li>
                                <li className="edit-category">
                                    <NavLink to="/category-edit-category">
                                        <i className="fa fa-edit fa-5x"></i>
                                        <span className="nav-text">Edit Budget</span>
                                    </NavLink>
                                </li>
                                <li className="show-category">
                                    <NavLink to="/category-show-category">
                                        <i className="fa fa-eye fa-5x"></i>
                                        <span className="nav-text">Show All </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="reports">
                            <NavLink to="/reports">
                                <i className="fa fa-bar-chart-o fa-5x"></i>
                                <span className="nav-text">Reports</span>
                                <i className="fa fa-angle-down fa-5x"></i>
                            </NavLink>
                            <ul className="sub-menu">
                                <li className="report-category">
                                    <NavLink to="/reports-report-category">
                                        <i className="fa fa-folder fa-5x"></i>
                                        <span className="nav-text">By Category</span>
                                    </NavLink>
                                </li>
                                <li className="report-month">
                                    <NavLink to="/reports-report-month">
                                        <i className="fa fa-calendar fa-5x"></i>
                                        <span className="nav-text">By Month</span>
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