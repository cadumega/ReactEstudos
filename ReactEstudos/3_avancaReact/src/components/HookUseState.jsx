import { useState } from 'react'

const HookUseState = () => {

  const [valor, setValor] = useState(0);

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