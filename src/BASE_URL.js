// const BASE_URL = "https://my-json-server.typicode.com/putheka/demo/products"
// export default BASE_URL
import axios from 'axios';
    
const BASE_URL = "https://api.escuelajs.co/api/v1/products"
export default BASE_URL


export async function getData() {
    return await axios.get(`${BASE_URL}`);
}

export async function postData(data) {
    return await axios.post(BASE_URL, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function putData(id, data) {
    return await axios.put(`${BASE_URL}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


export async function deleteData(id) {
    return await axios.delete(`${BASE_URL}/${id}`);
}