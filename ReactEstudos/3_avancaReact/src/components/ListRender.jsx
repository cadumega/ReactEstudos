import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Carlos", "Pedro", "Josias"]);

  const [users, setUsers] = useState([       // Array de objetos, viria de um banco de dados
    { id: 1, name: "Matheus", age: 20 },
    { id: 2312421412, name: "Vinicius", age: 25 },
    { id: 4312432432, name: "Sergio", age: 30 },
  ])

  const deleteRandom = () => {    // Função para deletar um item aleatório
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {   // Função para remover um item do array
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id)
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (          // i de index como parametro
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>                                {/* chave unica, boa pratica abaixo */}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>

        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender

