import { useState, useEffect } from 'react'
import "./App.css";
import createBoard from './services/createBoard'

function App() {
  const [board, setBoard] = useState()

  useEffect(() => createBoard(setBoard), [])

  return (
    <div className="App">
      <h1>Quiz Platform</h1>
    </div>
  );
}

export default App;
