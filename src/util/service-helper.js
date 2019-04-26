import {getCategoryListURL, getExpenseListURL} from './service-url';
import axios from 'axios';

const getCategoryList = () => {
    return axios.get(getCategoryListURL);
}
const getExpenseList = () => {
    return axios.get(getExpenseListURL);
}

export {
    getCategoryList, getExpenseListURL
}