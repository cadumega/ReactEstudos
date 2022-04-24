import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = () => {
    // 3 - gerenciamento de dados
    let [name, setName] = useState()
    let [email, setEmail] = useState()

    const handleName = (e) => {
        // console.log("Mudou o nome");
        setName(e.target.value);
    }
    // Mudar o estado a cada vez que o name for alterado, + fácil a manutenção

    // console.log(name);
    console.log(email);

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} />
                </div>
                {/* lable envolvendo input */}
                <label>
                    <span>E-mail </span>
                    <input type="email" name="email" placeholder='Digite o seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm

// dispara a funcao handleChange toda vez que alguem digitar algo