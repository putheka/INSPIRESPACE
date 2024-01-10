import { api } from "../utils/fileService";

const GET_ALL_USER = "https://api.escuelajs.co/api/v1/users"
export default GET_ALL_USER


export const UPLOAD_FILE = async (file) => {
    const response = await api.post("files/upload", file);
    return response.data;
}

export const CREATE_USER = async (users) => {
    const response = await api.post("users", users);
    return response.data;
}

export const UPDATE_USER_BY_ID = async (id, users) => {
    const response = await api.put(`users/${id}`, users);
    return response.data;
}

export const DELETE_USERS = async (id) => {
    const response = await api.delete(`users/${id}`);
    return response.data;
}
