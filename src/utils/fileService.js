import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/",
})

export const UPLOAD_FILE = async (file) => {
    const response = await api.post("files/upload", file)
    return response.data
}
export const CREATE_PRODUCT = async (product) => {
    const response = await api.post("products", product)
    return response.data
}

export const UPDATE_PRODUCT_BY_ID = async (id, product) => {

    const response = await api.put(`products/${id}`, product)
    return response.data
}