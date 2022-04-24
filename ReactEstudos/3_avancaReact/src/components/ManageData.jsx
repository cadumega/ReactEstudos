import { useState } from "react";
import React from 'react'

const ManageData = () => {
  let someDataTest = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someDataTest}</p>
        <button onClick={() => (someDataTest = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
      </div>
    </div>
  );
};

export default ManageData;