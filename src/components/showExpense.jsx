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
                expenseDate: '',
                categoryId: ''
            }
        };
        // this.handleChangeInfo = this.handleChangeInfo.bind(this);                                                                                                                                   
    }

    getExpenseList() {
        axios.get('http://localhost:8080/expensetracker/rest/expense/')
            .then(res => {
                this.setState({ expenseList: res.data }); console.log(res.data)

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
                                    <th>ID</th>
                                    <th>Item</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    expenseList.map((expense) => {
                                        return (
                                            <tr>
                                                <td>{expense.expenseId}</td>
                                                <td>{expense.expenseName}</td>
                                                <td>{expense.expenseAmount}</td>
                                                <td>{expense.expenseDate}</td>
                                                <td>{expense.categoryID}</td>
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