import axios from 'axios';



const baseUrl = 'https://api.towercoverage.com/towercoverage.asmx';

const headers = {headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
}}


export default (apiUrl, formData) =>
    axios.post(`${baseUrl}/${apiUrl}`, formData, headers)
