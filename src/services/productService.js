import { api } from "../utils/fileService";


export const GET_ALL_PRODUCTS = async () => {
    const response = await api.get("products");
    return response.data;
}

export const GET_PRODUCT_BY_ID = async (id) => {
    const response = await api.get(`products/${id}`)
    return response.data
}

const BASE_URL = "https://api.escuelajs.co/api/v1/products"
export default BASE_URL

export const UPLOAD_FILE = async (file) => {
    const response = await api.post("files/upload", file);
    return response.data;
}

export const CREATE_PRODUCT = async (product) => {
    const response = await api.post("products", product);
    return response.data;
}

export const UPDATE_PRODUCT_BY_ID = async (id, product) => {
    const response = await api.put(`products/${id}`, product);
    return response.data;
}

export const DELETE_PRODUCT_BY_ID = async (id) => {
    const response = await api.delete(`products/${id}`);
    return response.data;
}
