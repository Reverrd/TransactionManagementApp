/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Transaction } from '../interface/Transaction';
const API_URL = 'https://integrations.getravenbank.com/v1';
const live_secret_key = `RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469`

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
  const response = await axios.get<Transaction[]>(`${API_URL}/accounts/transactions`, {
    headers: {
      Authorization: `Bearer ${live_secret_key}`,
    }});
  return response.data;
  } catch(error){
    console.error("Failed to fetch", error)
    throw error
  }
};

export const registerUser = async (data: any) => {
  return axios.post(`${API_URL}/pwbt/generate_account`, data,{
    headers:{Authorization: `Bearer ${live_secret_key}`}

  }

);

};

export const loginUser = async (data: any) => {
  return axios.post(`${API_URL}/login`, data,{
    headers:{Authorization: `Bearer ${live_secret_key}`}
  });
};



export const addTransaction = async (token: string, data: any) => {
  return axios.post(`${API_URL}/transactions`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateTransaction = async (token: string, id: number, data: any) => {
  return axios.put(`${API_URL}/transactions/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTransaction = async (token: string, id: number) => {
  return axios.delete(`${API_URL}/transactions/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
