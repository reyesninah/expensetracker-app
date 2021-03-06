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
            categories: [],
            expenseDate: ''
        };
    }

    componentDidMount() {
        const url = 'http://localhost:8080/expensetracker/rest/category/';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let categoriesFromDb = data.map(category => { return { value: category, display: category } })
                console.log(categoriesFromDb);

                //start
                // let categories = categoriesFromDb
                // for (let category of categories){
                //     let date = category.categoryDate.split('-')
                //     category.year = date[0]
                //     category.month = date [1]
                // }

                for (let category of categoriesFromDb) {
                    let date = category.display.categoryDate.split('-')
                    category.display.year = date[0]
                    category.display.month = date[1]
                }
                console.log("Parsed for date : ", categoriesFromDb)
                //end

                this.setState({ categories: [{ value: '', display: '(Select category)' }].concat(categoriesFromDb) });
            }).catch(error => {
                console.log(error);
            });

    }

    handleChangeInfo = e => {

        if (e.target.name === 'expenseDate') {
            console.log("Received date!")
            let dateString = e.target.value
            let date = dateString.split('-')
            let expenseDate = {
                date: e.target.value,
                year: date[0],
                month: date[1]
            }
            this.setState({ expenseDate })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        // this.setState({
        //     [e.target.name]: e.target.value
        // });
    }

    handleAddExpense = e => {

        let expense = {
            expenseId: this.state.expenseId,
            expenseName: this.state.expenseName,
            expenseAmount: this.state.expenseAmount,
            expenseDate: new Date (this.state.expenseDate.date),
            categoryId: this.state.categoryId
        };

        console.log("handleAddExpense - expense : ", expense);
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
        console.log("this.state", this.state);
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
                                <label htmlFor="date">Date</label>
                                {/* <input type="date" id="date" name="expenseDate" onChange={this.handleChangeInfo} /> */}
                                <input type="date" id="date" name="expenseDate" onChange={this.handleChangeInfo} />
                            </div>

                            <div className="form-row">
                                <label htmlFor="category">Category</label>
                                {
                                    this.state.expenseDate === ''

                                    ? <select className = "expenseCategory" ref="dropdown"
                                    value={this.state.categoryId} disabled></select>
                                     :<select className="expenseCategory" ref="dropdown"
                                    value={this.state.categoryId} onChange={(e) => this.setState({
                                        categoryId: e.target.value,
                                        validationError: e.target.value === "" ? "You must select a category " : ""
                                    })}>
                                    {this.state.categories.map((category, index) =>
                                        // this.state.expenseDate === category.display.categoryDate
                                        this.state.expenseDate.year === category.display.year &&
                                            this.state.expenseDate.month === category.display.month
                                            ? <option key={index} value={category.value.categoryId}>
                                                {category.display.categoryName}
                                            </option>
                                            : null
                                    )}
                                    </select>
                                }
                                
                            </div>

                            <div className="form-row">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" id="amount" placeholder="How much?" min="0" step="1"
                                    name="expenseAmount"
                                    onChange={this.handleChangeInfo} />
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