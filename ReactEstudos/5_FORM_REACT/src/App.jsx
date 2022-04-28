import './App.css'
import React from 'react'
import MyForm from './components/MyForm'

function App() {

  return (
    <div className="App">
     <h2>Forms</h2>
     <MyForm user={{name:"Josias" ,email:"josias@gmmail.com"}} /> 
     {/* user é um objeto que será passado para MyForm */}
    </div>
  )
}

export default App

// recebemos a prop user em const MyForm, no proprio input vou poder fazer uma condicional.
// Assim, consigo uma pré-configuração do formulário.