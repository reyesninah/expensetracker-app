import React, { Component, Fragment } from 'react';
import '../css/addExpense.css';
import axios from 'axios';
import Proptypes from 'prop-types';

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
            },
            category: "",
            total: 0
        };
        // this.handleChangeInfo = this.handleChangeInfo.bind(this);                                                                                                                                   
    }

    getExpenseList = () => {
        axios.get('http://localhost:8080/expensetracker/rest/category/report/')
            .then(res => {
                this.setState({ categoryReportList: res.data });
                console.log(res.data)

            })
    }

    setCategory = (category) => {
        this.setState({ category }, () => {
            let total = 0
            for (let category of this.state.categoryReportList) {
                if (category.categoryName === this.state.category) {
                    total += total + category.expenseAmount
                }
            }
            this.setState({ total }, () => {
                console.log("this.state: ", this.state)
            })
        })
    }

    render() {
        return (
            <div className="content-area">
                <div className="list-category">

                    <select className="expenseCategory" ref="dropdown"
                        onChange={(e) => this.setCategory(e.target.value)}>
                        {this.state.categoryReportList.map((category, index) =>
                            <option key={index} value={category.categoryId}>
                                {category.categoryName}
                            </option>
                        )}
                    </select>

                    <table name="expense-category">
                        <caption>Report By Category</caption>

                        <thead>
                            <tr>
                                <th>Expense Date</th>
                                <th>Expense Name</th>
                                <th>Expense Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categoryReportList.map((categoryReport) =>
                                    this.state.category === categoryReport.categoryName
                                        ? <tr>
                                            <td>{categoryReport.categoryDate}</td>
                                            <td>{categoryReport.expenseName}</td>
                                            <td>{categoryReport.expenseAmount}</td>
                                        </tr>
                                        : null
                                )
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