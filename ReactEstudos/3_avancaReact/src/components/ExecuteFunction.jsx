import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique em mim</button>
    </div>
  );
};

export default ExecuteFunction;

// Funcao do comp pai, atraves do comp filho. Passo a funcao por meio de uma prop e no componete filho, chamo a funcao, por exemplo atraves de um evento e assim é feito a chamada corretamente.