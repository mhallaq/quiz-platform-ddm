import { useState, useEffect } from 'react'
import JeopardyGrid from './jeopardyGrid'
import "./App.css";
import createBoard from './services/createBoard'

function App() {
  const [board, setBoard] = useState()

  useEffect(() => createBoard(setBoard), [])

  return (
    <div className="App">
      <h1>Quiz Platform</h1>
      <JeopardyGrid/>
    </div>
  );
}

export default App;
