import { useState, useEffect } from "react"
import MostrarTempo from "./MostraTempo"
import Button from "./Button"
import './styles.css'

function App() {
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const reset = () => {
    setTempo(0)
    setRunning(false)
  }

  return (
    <div className="App">
      <div className='testefuleiro1'>
        <MostrarTempo tempo={tempo} />
      </div>
      <div className='testefuleiro2'>
        <Button onClick={toggleRunning} content={running ? 'Pausar' : 'Iniciar'} />
        <Button onClick={reset} content='Reniciar' />
      </div>
    </div>
  );
}
export default App;
