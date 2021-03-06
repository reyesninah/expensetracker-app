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
            showForm: false,
            // categoryBudget : 0,
            categoryBudgetForm: ''
        };

    }

    componentDidMount() {
        this.getCategoryList();
    }

    getCategoryList() {
        axios.get('http://localhost:8080/expensetracker/rest/category/')
            .then(res => {
                this.setState({ categoryList: res.data }, () => {
                      console.log(this.state.categoryList);
                      
                      //get index for categoryBudget inside category object
                      //console.log(res.data);
                      console.log(this.state.categoryList.map(cat=>cat.categoryBudget))

                    let categoryList = this.state.categoryList;
                    for (let category of categoryList) {
                        category.showForm = false
                        //this.setState({categoryBudget: categoryList});
                    }
                    this.setState({ categoryList });

                })
            })
    }

    handleChangeInfo = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        });
    }

    on = (i, e) => {
        let categoryList = this.state.categoryList;
        categoryList[i].showForm = !categoryList[i].showForm
        this.setState({ categoryList })
    }

    editCategoryBudget = (categoryId, categoryBudget, e) => {
        
        e.preventDefault();

        console.log( "Values of id, budget and e after prevDef",categoryId, categoryBudget, e)
        const updateBudget = {
           categoryBudget : this.state.categoryBudget
        }
        console.log("UPdateBudgetObject" , updateBudget)
        console.log("categoryBudgetInitial : ", categoryBudget)
        console.log("updateBudget1ID: " + categoryId) 
        console.log("categoryBudgetUpdated : ", this.state.categoryBudget)

        const editUrl = 'http://localhost:8080/expensetracker/rest/category/'
        +categoryId;
            //+ this.state.categoryId;
        console.log("editURL: " + editUrl);

        axios.put(editUrl, updateBudget)
            .then(res => { 
                console.log("check update"); 
                console.log("res " + res.data); 
            })
            .catch((err)=>{
                if (err.response){
                    console.log("something went wrong", err.response.data)
                }
            })
        //refresh    call getListcateg  
        //console.log("updateBudget2 " + this.state.categoryId);
        console.log("upadteBudget2ID: " + categoryId)
        this.setState({
            showForm: false
           },
           ()=>this.componentDidMount()
           )

        console.log("value of e", e)
    }

    render() {
        let categoryList = this.state.categoryList;
        //console.log("checking categoryList value: ", categoryList)
        console.log("this.state", this.state);
        return (

            <Fragment>
                <div className="content-area">
                    <div className="list-category">
                        {/* <Fragment> */}
                        <label htmlFor="table">All Expense Categories</label>
                        <table className="expense-category">
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
                                        <td>{category.categoryBudget}</td>
                                        <td>{category.categoryDate}</td>
                                        <th><button type='submit' className="edit-budget"
                                            onClick={(e) => { this.on(i, e) }} >

                                            Edit Budget</button>
                                            <div className="edit-dialog-box" > {category.showForm ?

                                                <form className="edit-budget">
                                                    <div className="form-row">
                                                        <div className="form-row">
                                                            <label htmlFor="budget">Budget</label>
                                                            <input type="number" id="budget" name = "categoryBudget"
                                                                //value={this.state.categoryBudget}
                                                                onChange={this.handleChangeInfo} />
                                                        </div>
                                                        <input type="submit" id="submit" value="OK"
                                                           onClick={(e)=>{
                                                            this.editCategoryBudget(category.categoryId, category.categoryBudget, e)
                                                           }}/>
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