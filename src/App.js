import { useState, useEffect } from 'react'
import "./App.css";
import { fetchCategories, fetchClues } from './services/apiConfig'

function App() {
  const [board, setBoard] = useState({})

  useEffect(() => {
    (async () => {
      // fetch 6 random categories
      const randomCategories = await fetchCategories()
      // create empty categories array
      const categories = []
      // for each category, create an object and add to category array
      randomCategories && randomCategories.forEach(async category => {
      // each category consists of title and clues
        const title = category.title.toUpperCase()
        const clues = []
        const cluesArray = await fetchClues(category.id)
      // pull out first 6 clues from cluesArray
        for (let i = 0; i < 5; i++) {
      // each clue consists of Q&A, isolate information and push to clues array
          clues.push({
            question: cluesArray[i].question.toUpperCase(),
            answer: cluesArray[i].answer.toUpperCase()
          })
        }
      // assemble all the categories with their clues
        categories.push({
          title,
          clues
        })
      })
      // save data to state
      setBoard({categories})
    })()
  }, [])



  return (
    <div className="App">
      <h1>Quiz Platform</h1>
    </div>
  );
}

export default App;
