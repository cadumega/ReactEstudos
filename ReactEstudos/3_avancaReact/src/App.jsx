import { Fragment, useState } from "react";
import "./App.css";

import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import MessageState from "./components/MessageState";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
    const cars = [
        { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
        { id: 2, brand: "KIA", color: "Branco", km: 200000 },
        { id: 3, brand: "Renault", color: "Azul", km: 32000 },
    ];

    function showMessage() {
        console.log("Evento do componente pai");
    }

    const [message, setMessage] = useState();

    const handleMessage = (msg) => {
        setMessage(msg);
    };

    const users = [
        { id: 1, name: "Carlos", job: "Programador", age: 31 },
        { id: 2, name: "Eduardo", job: "Aviador", age: 33 },
        { id: 3, name: "Roberto", job: "Gamer", age: 19 },
        { id: 4, name: "Miguel", job: "Estudante", age: 16 },
    ];

    return (
        <div className="App">
            <h1>Seção 3</h1>
            <div>
                <img src="img1.jpeg" alt="Paisagem" />
            </div>

            <MessageState msg={message} />
            <ChangeMessageState handleMessage={handleMessage} />

            <ManageData />
            <ListRender />
            <ConditionalRender />
            {/* props */}
            <ShowUserName name="Matheus" />
            {/* destructuring */}
            <CarDetails brand="Ford" color="Azul" km={10000} />
            {/* reaproveitamento */}
            <CarDetails brand="VW" color="Vermelho" km={535} />
            <CarDetails brand="Fiat" color="Branco" km={0} />
            {/* loop com array de obj */}
            {cars.map((car) => (
                <CarDetails
                    key={car.id}
                    brand={car.brand}
                    color={car.color}
                    km={car.km}
                />
            ))}
            {/* fragments */}
            <Fragment />
            {/* children prop */}
            <Container>
                <p>Eu sou do componente superior</p>
            </Container>
            <Container>
                <div>
                    <p>Eu também</p>
                </div>
            </Container>
            {/* event as prop */}
            <ExecuteFunction myFunction={showMessage} />
            {/* state lift */}
            <MessageState msg={message} />
            <ChangeMessageState handleMessage={handleMessage} />

            {/* Extrair essas propriedades do componente */}
            {/* fazer o map para conseguir extrair as informacoes do objeto */}
            {users.map((user) => (
                <UserDetails
                    key={user.id}
                    name={user.name}
                    job={user.job}
                    age={user.age}
                />
            ))}
        </div>
    );
}

export default App;