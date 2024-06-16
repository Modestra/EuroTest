import { useEffect } from 'react'
import './App.css'
//import Card from './components/Card'
import Form from './components/Form';
import { Note } from './interfaces/note';

function App() {
  
  useEffect(()=>{

  }, [])
  const test:Note = {
    id: 1,
    title: "Test",
    description: "Тестовое описание",
    count: 20
  }
  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        Приложение
      </div>
    </nav>
    <div className="card">
      <div className="card-header">
        Записки
      </div>
      <div className="card-body">
        <div className="grid">
        </div>
      </div>
    </div>
    <Form/>
    </>
  )
}

export default App
