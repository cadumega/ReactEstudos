import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
    // 6 - Controlled inputs 
    // 3 - gerenciamento de dados
    let [name, setName] = useState(user ? user.name : "")
    let [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        // console.log("Mudou o nome");
        setName(e.target.value);
    }
    // Mudar o estado a cada vez que o name for alterado, + fácil a manutenção

    const handleSubmit = (e) => {
        e.preventDefault();                // Ira parar o evento padrão do formulário
        console.log(name, email);
    }

    // console.log(name);
    console.log(email);

    return (
        <div>
            {/* envio de form */}
            <form onSubmit={handleSubmit}>  {/* onSubmit é um evento que é disparado quando o formulário é enviado */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" value={name} placeholder='Digite o seu nome' onChange={handleName} />
                </div>
                {/* lable envolvendo input */}

                {/* simplificacao de manipulacao de state */}
                <label>
                    <span>E-mail </span>
                    <input type="email" name="email" value={email} placeholder='Digite o seu e-mail'
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm

// dispara a funcao handleChange toda vez que alguem digitar algo