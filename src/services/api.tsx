import axios from 'axios';
import { DataTransactions, GetTransactions } from '../@types/api';


const baseURL = 'http://localhost:3334';

const api = axios.create({
    baseURL,
});


export async function getTransactions(data?: GetTransactions){
    const response = await api.get<DataTransactions>(`/transaction?limit=${data?.limit}&page=${data?.page}&search=${data?.search}`);
    
    return response.data;
}