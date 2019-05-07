import React, { Component, Fragment } from 'react';
import '../css/addExpense.css';
import axios from 'axios';

class addExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenseList: [],
            expense: {
                expenseId: '',
                expenseName: '',
                expenseAmount: '',
                expenseDate: '',
                // expenseCategory: '',
                categoryId: ''
            },
            categories: []
            //selectedCategory: ''
        };
    }

    componentDidMount() {
        const url = 'http://localhost:8080/expensetracker/rest/category/';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let categoriesFromDb = data.map(category => 
                    { return { value: category, display: category } })
                console.log(categoriesFromDb);
                this.setState({ categories: [{ value: '', display: '(Select category)' }].concat(categoriesFromDb) });
            }).catch(error => {
                console.log(error);
            });

    }

    handleChangeInfo = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAddExpense = e => {

        let expense = {
            expenseId: this.state.expenseId,
            expenseName: this.state.expenseName,
            expenseAmount: this.state.expenseAmount,
            expenseDate: this.state.expenseDate,
            categoryId: this.state.categoryId
        };

        console.log(expense);
        let expenseList = [...this.state.expenseList];
        expenseList.push(expense);
        this.setState({ expenseList: expenseList });
        e.preventDefault();

        let headers = {
            'Content-Type': "application/json"
        }

        axios.post('http://localhost:8080/expensetracker/rest/expense/',
            expense, { headers: headers })
            .then(res => {
                console.log(res.data)
            })
    }

    render() {
        return (
            <Fragment>
                <div className="main-content">
                    <div className="content-area" id="content-add-expense">
                        <form id="add-expense">
                            <div className="form-row">
                                <label htmlFor="item">Item</label>
                                <input type="text" id="name" placeholder="What did you spend on?"
                                    name="expenseName" onChange={this.handleChangeInfo} />
                            </div>
                            <div className="form-row">
                                <label htmlFor="category">Category</label>
                                {/* <input type="text" list="category-type" id="category" placeholder="Select option"
                                    name="expenseCategory" onChange={(e) => { this.handleChangeInfo(e) }} /> */}

                                {/* <select className="expenseCategory"  ref="dropdown" value={this.state.expenseCategory} */}
                                {/* expenseCategory: e.target.value, */}

                                <select className="expenseCategory"  ref="dropdown" value={this.state.categoryId}onChange={(e) => this.setState({
                                        categoryId: e.target.value,
                                        validationError: e.target.value === "" ? "You must select a category " : ""
                                    })}>
                                    {this.state.categories.map((category, index) =>
                                        <option key={index} value={category.value.categoryId}>
                                            {category.display.categoryName}
                                        </option>)}
                                </select>
                            </div>
                            <div className="form-row">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" name="expenseDate" onChange={this.handleChangeInfo} />
                            </div>
                            <div className="form-row">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" id="amount" placeholder="How much?"
                                    name="expenseAmount" onChange={this.handleChangeInfo} />
                            </div>
                            <input type="submit" id="submit" value="Add Expense"
                                onClick={this.handleAddExpense} />
                        </form>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default addExpense;