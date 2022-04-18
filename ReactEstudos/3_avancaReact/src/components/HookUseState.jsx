import {useState} from 'react'

const HookUseState = () => {

  // let valor = 0, //ate consigo passar esse valor de var dinamico, só que o use state me economiza codigo p/ mudanca de estado, chamada de funcao.
  // para isso... crio a variavel com: 
  // [Nome da variavel, e o nome do metodo que altera o valor] manipular itens de forma mais simples.
  // Dentro do valor do useState, eu passo o valor inicial da variavel, o valor que começa null () (0)..

  const [ valor , setValor] = useState(0);

  function funcAumentar() {
    setValor(valor + 1)
  }

  function funcDiminuir() {
    setValor(valor - 1)
  }

  return (
    <div>
      <div>
      <h1>Hook Use State</h1>
      <h2>Quantidade de produtos no carrinho: <b>{valor}</b></h2>

      <button onClick={funcAumentar}>Add +1</button>
      <button onClick={funcDiminuir}>Add -1</button>

      </div>
    
    </div>
  )
}

export default HookUseState