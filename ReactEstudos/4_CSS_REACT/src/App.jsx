import './App.css'
import MyComponent from './components/MyComponent';
import {useState} from "react";
import Title from './components/Title';

function App() {
    const n = 5;
    const [name]= useState ("Carlos");

    const redTitle = true;
  return (
    <div className="App">
      <h1>React Global com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js </p>
      
      <p style={n < 10 ? { color: "red" } : { color: "pink" }}>Css Inline Dinâmico Condicional
      </p>
      <p style={n < 10 ? { color: "gray" } : { color: "green" }}>Css Inline Dinâmico Condicional
      </p>
      <p style={name === "Carlos"? { color: "lightgreen" } : null }> Teste Nome
      </p>

      {/* Classe Dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
          Este título vai ter classe dinâmica</h2>

       {/* Css Modules */}
       <Title />
    </div>
  )
}

export default App
