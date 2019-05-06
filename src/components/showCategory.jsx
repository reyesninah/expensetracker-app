import React, { Component, Fragment, BootstrapTable, TableHeaderColumn } from 'react';
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
            },
            isVisible : ''
        };
    }

    componentDidMount() {
        // this.getCategoryList();
        let categoryList = this.state.categoryList;
        // for (let category of categoryList){
        //     category.isVisible = false
        // }
        // this.setState({categoryList});
    }

    getCategoryList() {
        axios.get('http://localhost:8080/expensetracker/rest/category/')
            .then(res => {
                this.setState({ categoryList: res.data })
            })
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

    on =e=> {
        this.setState({
            isVisible: true})
    }

    // editCategoryBudget = rowIndex => {
    //     let categoryList = [...this.state.categoryList];
    //     categoryList.splice(rowIndex, 1);
    //     this.setState({ categoryList: categoryList });
    // }
    
    editCategoryBudget() {
        axios.put('http://localhost:8080/expensetracker/rest/category')
            .then(res => {
                this.setState({ categoryList: res.data })
            })
    }

    render() {
        let categoryList = this.state.categoryList;
        return (

            <Fragment>
                <div className="content-area">
                    <div className="list-category">
                        {/* <Fragment> */}
                        <label htmlFor="table">All Expense Categories</label>
                        <table className="expense-category">
                            {/* <caption>All Expense Categories</caption> */}
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Budget</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((category, index) => {
                                    return (
                                        <tr>
                                            <td>{category.categoryId}</td>
                                            <td>{category.categoryName}</td>
                                            <td >{category.categoryBudget}</td>
                                            <td>{category.categoryDate}</td>
                                            <th><button type='submit' className="edit-budget"
                                                onClick={this.on}>Edit Budget</button>
                                                <div className="edit-dialog-box" > {this.state.isVisible ? 

                                                    <form className="edit-budget"> 
                                                        <div className="form-row">
                                                            {/* <div class="form-row">
                                                                <label for="category">Category</label>
                                                                <input type="text" list="category-type" id="category" placeholder="Select option" 
                                                                value  = {this.state.categoryId} contentEditable = "false"/>
                                                            </div> */}
                                                            <div class="form-row">
                                                                <label for="budget">Budget</label>
                                                                <input type="number" id="budget"
                                                                value  = {this.state.categoryBudget} contentEditable = "true" />
                                                            </div>
                                                            {/* <div class="form-row">
                                                                <label for="date">Date</label>
                                                                <input type="date" id="date" 
                                                                value  = {this.state.categoryDate} contentEditable = "false"/>
                                                            </div> */}
                                                            <input type="submit" id="submit" value="Edit Budget" onClick={this.handleSave}/>
                                                        </div>
                                                    </form> 
                                                    
                                                    : null }
                                                </div>
                                            </th>
                                        </tr>

                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>

        );
    }
}

showCategory.propTypes = {
    categoryList: Proptypes.func
}

export default showCategory;