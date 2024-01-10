// const BASE_URL = "https://my-json-server.typicode.com/putheka/demo/products"
// export default BASE_URL
import axios from 'axios';
    
const BASE_URL = "https://api.escuelajs.co/api/v1/products"
export default BASE_URL


// export const CREATE_PRODUCT = async (product) => {
//     const response = await axios.post(`${BASE_URL}`)
//     return response.data
// }
export const Delete_Product = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
}
export async function postData(data) {
    return await axios.post(BASE_URL, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const CREATE_PRODUCT = async (product) => {
    try {
      const response = await axios.post(BASE_URL, product, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      // Handle errors appropriately
      console.error('Error creating product:', error);
      throw error; // Rethrow the error to handle it in the component or calling function
    }
  };
// export async function getData() {
//     return await axios.get(`${BASE_URL}`);
// }


// export async function putData(id, data) {
//     return await axios.put(`${BASE_URL}/${id}`, data, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }


// export const Delete_Product = async function deleteData(id) {
//     return await axios.delete(`${BASE_URL}/${id}`);
    
// }

