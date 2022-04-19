import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>
      {children}
    </div>
  );
};

export default Container;

// Componente filho de Container, preciso passar o conteúdo para ele.
// Tenho uma propriedade children e também uma propriedade myValue.

// 2 containers sendo impresso no App.jsx: , os dois tem props distintas e os dois tem html diferentes.