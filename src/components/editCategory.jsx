import React, { Component } from 'react';
import '../css/editCategory.css';

class editCategory extends Component {

    render() {

        return (
            <div class="content-area">
                <form id="add-category">
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
                        <label for="budget">Budget</label>
                        <input type="number" id="budget" />
                    </div>
                    <div class="form-row">
                        <label for="date">Date</label>
                        <input type="date" id="date" />
                    </div>
                    <input type="submit" id="submit" value="Edit Budget" />
                </form>
            </div>
        );
    }
}

export default editCategory;