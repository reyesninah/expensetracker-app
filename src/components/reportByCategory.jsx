import React, { Component } from 'react';
import '../css/reportByCategory.css';

class reportByCategory extends Component {
    
    render() {

        return (
            <div class="content-area">
                <div class="list-category">
                    <table name="expense-category">
                        <caption>Report By Category</caption>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Entertainment</td>
                                <td>Movie Ticket</td>
                                <td>250.00</td>
                                <td>June 6, 2018</td>
                            </tr>
                            <tr>
                                <td>Entertainment</td>
                                <td>Gunpla</td>
                                <td>1000.00</td>
                                <td>June 6, 2018</td>
                            </tr>
                            <tr>
                                <td>Entertainment</td>
                                <td>Skating</td>
                                <td>700.00</td>
                                <td>June 6, 2018</td>
                            </tr>
                            <tr>
                                <td>Entertainment</td>
                                <td>Swimming sa drum</td>
                                <td>10.00</td>
                                <td>June 6, 2018</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default reportByCategory;