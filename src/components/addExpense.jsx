import React, { Component } from 'react';
import '../css/addExpense.css';

class addExpense extends Component {

    render() {

        return (
            <div class="main-content">
                <div className="content-area" id="content-add-expense">
                    <form id="add-expense">
                        <div class="form-row">
                            <label for="item">Item</label>
                            <input type="text" id="name" placeholder="What did you spend on?" />
                        </div>
                        <div class="form-row">
                            <label for="category">Category</label>
                            <input type="text" list="category-type" id="category" placeholder="Select option" />
                            <datalist id="category-type">
                                <option value="Food" />
                                <option value="Utilities" />
                                <option value="Entertainment" />
                            </datalist>
                        </div>
                        <div class="form-row">
                            <label for="date">Date</label>
                            <input type="date" id="date" />
                        </div>
                        <div class="form-row">
                            <label for="amount">Amount</label>
                            <input type="number" id="amount" placeholder="How much?" />
                        </div>
                        <input type="submit" id="submit" value="Add Expense" />
                    </form>
                </div>
            </div>
        );
    }
}

export default addExpense;