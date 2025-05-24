import axios from 'axios';
import { CONFIG } from '../config/config';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = `https://api.green-api.com/waInstance${CONFIG.instanceId}`;

export const sendMessage = (message: string) => {
    return axios.post(`${BASE_URL}/SendMessage/${CONFIG.apiToken}`, {
        chatId: CONFIG.chatId,
        message,
    });
};

export const getChatHistory = (count: number = 10) => {
    return axios.post(`${BASE_URL}/getChatHistory/${CONFIG.apiToken}`, {
        chatId: CONFIG.chatId,
        count,
    });
};

export const getStateInstance = () => {
    return axios.get(`${BASE_URL}/getStateInstance/${CONFIG.apiToken}`);
};
