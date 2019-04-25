import React, { Component } from 'react';
import '../css/reportByMonth.css';

class reportByMonth extends Component {

    render() {

        return (
            <div class="content-area">
                <div class="list-category">
                    <table name="expense-category">
                        <caption>Report By Month</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>March 10, 2018</td>
                                <td>Food</td>
                                <td>Samgyupsal</td>
                                <td>400.00</td>

                            </tr>
                            <tr>
                                <td>March 16, 2018</td>
                                <td>Entertainment</td>
                                <td>Gunpla</td>
                                <td>1000.00</td>

                            </tr>
                            <tr>
                                <td>March 27, 2018</td>
                                <td>Entertainment</td>
                                <td>Skating</td>
                                <td>700.00</td>

                            </tr>
                            <tr>
                                <td>March 30, 2018</td>
                                <td>Utilities</td>
                                <td>House Rent</td>
                                <td>5000.00</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default reportByMonth;

