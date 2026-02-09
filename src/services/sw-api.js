import axiosInstance from "./axiosInstance"

const getPeople = async () => {
    const response = await axiosInstance.get('/people');
    return response.data;
}


const getPlanets = async () => {
    const response = await axiosInstance.get('/planets');
    return response.data;
}


const getStarShips = async () => {
    const response = await axiosInstance.get('/starships');
    return response.data;
}


export { getPeople, getPlanets, getStarShips };