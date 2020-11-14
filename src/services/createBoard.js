import { fetchCategories, fetchClues } from './apiConfig'

const createBoard = (async (setBoard) => {
    const randomCategories = await fetchCategories()
    const categories = []
    randomCategories && randomCategories.forEach(async category => {
        const title = category.title.toUpperCase()
        const clues = []
        const cluesArray = await fetchClues(category.id)
        for (let i = 0; i < 5; i++) {
            clues.push({
                question: cluesArray[i].question.toUpperCase(),
                answer: cluesArray[i].answer.toUpperCase()
            })
        }
        categories.push({
            title,
            clues
        })
    })
    setBoard({ categories })
})

export default createBoard