import React, { Component, Fragment } from 'react';
import '../css/showCategory.css';
import axios from 'axios';
import Proptypes from 'prop-types';
import {
    getCategoryList, editCategory
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
            showForm: false
        };
    }

    componentDidMount() {
        this.getCategoryList();
        //this.editCategoryBudget();

    }

    getCategoryList() {
        axios.get('http://localhost:8080/expensetracker/rest/category/')
            .then(res => {
                this.setState({ categoryList: res.data }, () => {
                    //  console.log(this.state.categoryList);
                    let categoryList = this.state.categoryList;
                    for (let category of categoryList) {
                        category.showForm = false
                    }
                    this.setState({ categoryList });
                })
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

    on = (i, e) => {
        let categoryList = this.state.categoryList;
        // console.log("Index value", i);
        // console.log("categoryList[i]", categoryList[i]);
        categoryList[i].showForm = !categoryList[i].showForm
        this.setState({ categoryList })
        // console.log(categoryList);
        // console.log(i);
    }

    editCategoryBudget = (e) => {

        // let category = {
        //     categoryId: this.state.categoryId,
        //     categoryName: this.state.categoryName,
        //     categoryBudget: this.state.categoryBudget,
        //     categoryDate: this.state.categoryDate
        // };
        // //let category = this.state.category;

        // axios.put('http://localhost:8080/expensetracker/rest/category', category)
        //     .then(res => {
        //         this.setState({ categoryList: res.data })
        //     })
        //     let categoryList = this.state.categoryList;
        // //category.showForm = false;

        //const categoryId = this.state.categoryId;

        const updateBudget = {
            categoryId: this.setState.categoryId,
            categoryBudget: this.setState.categoryBudget
        }
        console.log("updateBudget1 " + updateBudget);

        const editUrl = 'http://localhost:8080/expensetracker/rest/category/'
           // + this.setState.categoryId;
        console.log("editURL: " + editUrl);

        axios.put(editUrl, updateBudget)
            .then(res => { console.log("check update"); console.log("res " + res); })

        console.log("updateBudget2 " + updateBudget);
        this.setState({
            showForm: false
        })
    }

    render() {
        let categoryList = this.state.categoryList;
        //console.log("checking categoryList value: ", categoryList)
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
                                {categoryList.map((category, i) =>
                                    //{
                                    // return (
                                    <tr key={i}>
                                        {/* {console.log("Current index: ", i)} */}
                                        <td>{category.categoryId}</td>
                                        <td>{category.categoryName}</td>
                                        <td >{category.categoryBudget}</td>
                                        <td>{category.categoryDate}</td>
                                        <th><button type='submit' className="edit-budget"
                                            // onClick={(i, e) => { console.log("Index value:", i) }} >
                                            //onClick={(i, e) => { this.on(i, e) }} > */}
                                            //onClick={()=> {this.on(i,e)} }>
                                            onClick={(e) => { this.on(i, e) }} >

                                            Edit Budget</button>
                                            <div className="edit-dialog-box" > {category.showForm ?

                                                <form className="edit-budget">
                                                    <div className="form-row">
                                                        <div className="form-row">
                                                            <label htmlFor="budget">Budget</label>
                                                            <input type="number" id="budget"
                                                                value={this.state.categoryBudget} 
                                                                onChange= {this.handleChangeInfo}/>
                                                        </div>
                                                        <input type="submit" id="submit" value="OK"
                                                            onClick={this.editCategoryBudget} />
                                                    </div>
                                                </form>

                                                : null}
                                            </div>
                                        </th>
                                    </tr>
                                    //)
                                    //}
                                )
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