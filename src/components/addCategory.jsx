import React, { Component, Fragment } from 'react';
import '../css/addCategory.css';
import axios from 'axios';
import {
    addCategoryExpense
} from '../util/service-helper';

class addCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            category: {
                categoryId: '',
                categoryName: '',
                categoryBudget: '',
                categoryDate: ''
            }
        };                                                                                                                                   
    }

    handleChangeInfo = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAddCategoryExp = e => {

        let category = {
            categoryId: this.state.categoryId,
            categoryName: this.state.categoryName,
            categoryBudget: this.state.categoryBudget,
            categoryDate: this.state.categoryDate
        };

        console.log(category);
        let categoryList = [...this.state.categoryList];
        categoryList.push(category);
        this.setState({ categoryList: categoryList });
        e.preventDefault();

        let headers = {
            'Content-Type': "application/json"
        }

        axios.post('http://localhost:8080/expensetracker/rest/category/',
            category, { headers: headers })
            .then(res => {
                console.log(res.data)
            })
    }

    render() {
        //let categoryList = this.state.categoryList;
        return (
            <Fragment>
                <div className="content-area">
                    <form id="add-category">
                        <div className="form-row">
                            <label htmlFor="category">Category</label>
                            <input type="text" id="category" name = "categoryName" required="required"
                                onChange={this.handleChangeInfo} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="budget">Budget</label>
                            <input type="number" id="budget" name = "categoryBudget" placeholder="1000" min="0" step="1"
                                onChange={this.handleChangeInfo}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name = "categoryDate" required="required"
                                onChange={this.handleChangeInfo} />
                        </div>
                        <input type="submit" id="submit" value="Add Category"
                            onClick={this.handleAddCategoryExp} />
                    </form>
                </div>
            </Fragment>
        );
    }
}
export default addCategory;