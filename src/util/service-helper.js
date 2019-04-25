import {getCategoryListURL} from './service-url';
import axios from 'axios';

const getCategoryList = () => {
    return axios.get(getCategoryListURL);
}

export {
    getCategoryList
}