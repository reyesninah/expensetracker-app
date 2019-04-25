import React, { Component } from 'react';
import '../css/showExpense.css';

class showExpense extends Component {

    render() {

        return (
            <div class="content-area">
                <div class="list-expense">
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
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default showExpense;