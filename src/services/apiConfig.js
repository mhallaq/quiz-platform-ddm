import axios from 'axios'


const BASE_URL = "https://jservice.io/api/"
const CATEGORIES_URL = BASE_URL + "categories?count=6&offset=" + Math.random() * 1000
let CLUES_URL = BASE_URL + "clues?category="


export const fetchCategories = async () => {
    try {
        const response = await axios.get(CATEGORIES_URL)
        return response.data
    } catch (error) {
        throw error
    }
}

export const fetchClues = async (category_id) => {
    try {
        const response = await axios.get(CLUES_URL + category_id)
        return response.data
    } catch (error) {
        throw error
    }
}

