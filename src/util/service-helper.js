import {
    getCategoryListURL,
    getExpenseListURL,
    addCategoryExpenseURL,
    addExpenseURL
} from './service-url';
import axios from 'axios';

const getCategoryList = () => {
    return axios.get(getCategoryListURL);
}
const getExpenseList = () => {
    return axios.get(getExpenseListURL);
}
const addCategoryExpense = () => {
    return axios.post(addCategoryExpenseURL)
}
const addExpense = () => {
    return axios.post(addExpenseURL)
}

export {
    getCategoryList,
    getExpenseList,
    addCategoryExpense,
    addExpense
}