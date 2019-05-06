import React, { Component, Fragment } from 'react';
import '../css/showExpense.css';
import axios from 'axios';
import Proptypes from 'prop-types';
import {
    getExpenseList
} from '../util/service-helper';

class showExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseList: [],
            expense: {
                expenseId: '',
                expenseName: '',
                expenseAmount: '',
                expenseDate: ''
            }
        };
        // this.handleChangeInfo = this.handleChangeInfo.bind(this);                                                                                                                                   
    }

    getExpenseList() {
        axios.get('http://localhost:8080/expensetracker/rest/expense/')
            .then(res => {
                this.setState({ expenseList: res.data })
            })
    }

    componentDidMount() {
        this.getExpenseList();
    }

    handleChangeInfo = e => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            expense: {
                ...prevState.expense,
                [name]: value
            }
        }));
    }

    handleAddExpense = e => {
        let expense = this.state.expense;
        let expenseList = [...this.state.expenseList];
        expenseList.push(expense);
        this.setState({ expenseList: expenseList });
        e.preventDefault();
    }

    render() {
        let expenseList = this.state.expenseList;
        return (
            <div className="content-area">
                <div className="list-expense">
                    <Fragment>
                        <table name="expense-table">
                            <caption>All Expense Transactions</caption>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                <td>Fita Tuna Spreadz</td>
                                <td>20.00</td>
                                <td>Food</td>
                                <td>June 6, 2018</td>
                            </tr>
                            <tr>
                                <td>Meralco bill</td>
                                <td>1000</td>
                                <td>Utilities</td>
                                <td>October 25, 2018</td>
                            </tr>
                            <tr>
                                <td>Movie Ticket</td>
                                <td>250.00</td>
                                <td>Entertainment</td>
                                <td>November 4, 2018</td>
                            </tr> */}

                                {
                                    expenseList.map((expense) => {
                                        return (
                                            <tr>
                                                <td>{expense.expenseId}</td>
                                                <td>{expense.expenseName}</td>
                                                <td>{expense.expenseAmount}</td>
                                                <td>{expense.expenseDate}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Fragment>
                </div>
            </div>
        );
    }
}

showExpense.propTypes = {
    expenseList: Proptypes.func
}

export default showExpense;