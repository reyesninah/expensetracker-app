import React, { Component } from 'react';
import '../css/reportByCategory.css';
import Proptypes from 'prop-types';
import axios from 'axios';


class reportByCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryReportList: [],
            categoryReport: {
                categoryName: '',
                expenseName: '',
                expenseAmount: '',
                categoryDate: ''
            }
        };
        // this.handleChangeInfo = this.handleChangeInfo.bind(this);                                                                                                                                   
    }

    getExpenseList() {
        axios.get('http://localhost:8080/expensetracker/rest/category/report/')
            .then(res => {
                this.setState({ categoryReportList: res.data }); 
                console.log(res.data)

            })
    }
    
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
                                {
                                    categoryReportList.map((categoryReport) => {
                                        return (
                                            <tr>
                                                <td>{categoryReport.categoryName}</td>
                                                <td>{categoryReport.expenseName}</td>
                                                <td>{categoryReport.expenseAmount}</td>
                                                <td>{categoryReport.categoryDate}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

reportByCategory.propTypes = {
    categoryReportList: Proptypes.func
}

export default reportByCategory;