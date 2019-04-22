import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component {
    render() {
        return (
            <div class="content-area">
                <form id="add-expense">
                    <div class="form-row">
                        <label for="item">Item</label>
                        <input type="text" id="name" placeholder="What did you spend on?" 
                            value = {this.state.expenseItem} />
                    </div>
                    <div class="form-row">
                        <label for="category">Category</label>
                        <input type="text" list="category-type" id="category" placeholder="Select option"
                            value = {this.state.expenseCategory}/> 
                        <datalist id="category-type">
                            <option value="Food"/>
                            <option value="Utilities"/>
                            <option value="Entertainment"/>
                        </datalist>
                    </div>
                    <div class="form-row">
                        <label for="date">Date</label>
                        <input type="date" id="date" value = {this.state.expenseDate}/>
                    </div>
                    <div class="form-row">
                        <label for="amount">Amount</label>
                        <input type="number" id="amount" placeholder="How much?" 
                            value = {this.state.expenseAmount}/>
                    </div>
                    <input type="submit" id="submit" value="Add Expense"
                        onClick={this.props.handleAddExpense} />
                </form>
            </div>
        );
    }
}

export default Body;