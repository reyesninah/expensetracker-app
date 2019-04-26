import React, { Component, Fragment } from 'react';
import '../css/showCategory.css';
import axios from 'axios';
import Proptypes from 'prop-types';
import {
    getCategoryList
} from '../util/service-helper';

class showCategory extends Component {
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
        // this.handleChangeInfo = this.handleChangeInfo.bind(this);                                                                                                                                   
    }

    getCategoryList() {
        axios.get('http://localhost:8080/expensetracker/rest/category/')
            .then(res => {
                this.setState({ categoryList: res.data })
            })
    }

    componentDidMount() {
        this.getCategoryList();
    }

    handleChangeInfo = e => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            category: {
                ...prevState.category,
                [name]: value
            }
        }));
    }

    handleAddCategory = e => {
        let category = this.state.category;
        let categoryList = [...this.state.categoryList];
        categoryList.push(category);
        this.setState({ categoryList: categoryList });
        e.preventDefault();
    }

    render() {
        let categoryList = this.state.categoryList;
        return (
            <div class="content-area">
                <div class="list-category">
                    <Fragment>
                        <table className="expense-category">
                            <caption>All Expense Categories</caption>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Budget</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categoryList.map((category) => {
                                        return (
                                            <tr>
                                                <td>{category.categoryId}</td>
                                                <td>{category.categoryName}</td>
                                                <td>{category.categoryBudget}</td>
                                                <td>{category.categoryDate}</td>
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

showCategory.propTypes = {
    categoryList: Proptypes.func
}

export default showCategory;