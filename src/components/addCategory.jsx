import React, { Component } from 'react';
import '../css/addCategory.css';

class addCategory extends Component {
    
    render() {

        return (
            <div class="content-area">
                <form id="add-category">
                    <div class="form-row">
                        <label for="category">Category</label>
                        <input type="text" id="category" />
                    </div>
                    <div class="form-row">
                        <label for="budget">Budget</label>
                        <input type="number" id="budget" />
                    </div>
                    <div class="form-row">
                        <label for="date">Date</label>
                        <input type="date" id="date" />
                    </div>
                    <input type="submit" id="submit" value="Add Category" />
                </form>
            </div>
        );
    }
}

export default addCategory;