import React, { Component, Fragment } from 'react';
import '../css/showCategory.css';
import axios from 'axios';
import Proptypes from 'prop-types';
// import {
//     getCategoryList
// } from './util/service-helper.js';

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
    }


    getCategoryList() {
        axios.get('http://localhost:8080/expensetracker/rest/category/')
            .then(res => {
                const categoryList = res.data;
                this.setState({ categoryList: categoryList })
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
        return (
            <div class="content-area">
                <div class="list-category">
                    <Fragment>
                        <table className="expense-category">
                            {/* <caption>All Expense Categories</caption>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Budget</th>
                                    <th>Date</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {
                                    this.props.categoryList.map((category) => {
                                        return (
                                            <tr>
                                                <th>{category.categoryId}</th>
                                                <th>{category.categoryName}</th>
                                                <th>{category.categoryBudget}</th>
                                                <th>{category.categoryDate}</th>
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