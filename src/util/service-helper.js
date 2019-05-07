import {
    getCategoryListURL,
    getExpenseListURL,
    addCategoryExpenseURL,
    addExpenseURL,
    editCategoryURL
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
const editCategory = () => {
    return axios.put(editCategoryURL)
}

export {
    getCategoryList,
    getExpenseList,
    addCategoryExpense,
    addExpense,
    editCategory
}