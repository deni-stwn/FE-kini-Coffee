import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL

export const fetchDataApi = async (endpoint: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch Data')
  }
}