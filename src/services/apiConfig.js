import axios from 'axios'

const URL = "https://jservice.io/api/"

const CATEGORIES_URL = URL + "categories?count=6&offset=" + Math.random() * 1000
const CLUES_URL = URL + "clues?category="
const RAND_URL = URL + "random"



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

export const fetchRand = async () => {
    try {
        const response = await axios.get(RAND_URL)
        return response.data
    } catch (error) {
        throw error
    }
}
