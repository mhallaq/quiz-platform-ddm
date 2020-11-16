import { fetchCategories, fetchClues } from './apiConfig'

const createBoard = (async (setBoard) => {
    const randomCategories = await fetchCategories()
    const categories = randomCategories.map(async category => {
        const clues =[]
        const cluesArray = await fetchClues(category.id)
        for (let i = 0; i < 5; i++) {
            clues.push({
                question: cluesArray[i].question.toUpperCase(),
                answer: cluesArray[i].answer.toUpperCase()
            })
        }
        return {
            title: category.title.toUpperCase(),
            clues: clues
        }
    })
    Promise.all(categories).then(result =>  setBoard( result ))
})

export default createBoard

