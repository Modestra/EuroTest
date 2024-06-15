import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="card">
      <div className="card-header">
        Рекомендуемые
      </div>
      <div className="card-body">
        <div className="grid">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
  </div>
  )
}

export default App
