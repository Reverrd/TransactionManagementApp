/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL = 'https://integrations.getravenbank.com/v1';

export const registerUser = async (data: any) => {
  return axios.post(`${API_URL}/pwbt/generate_account`, data);
};

export const loginUser = async (data: any) => {
  return axios.post(`${API_URL}/login`, data);
};

export const fetchTransactions = async (token: string) => {
  return axios.get(`${API_URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
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
