import './App.css'
import Car  from './components/Car';

function App() {
    const myCars = [
        { id: 1 , name: "Ferrari", color: "Amarelo", km: 0 },
        { id: 2 ,name: "KIA", color: "Branco", km: 200000 },
        { id: 3 ,name: "Renault", color: "Azul", km: 32000 },
    ];

  return (
    <div className="App">
      <h1>Showroom de Carros</h1>

      {/* fazer um loop para exibir melhor */}
      <div className= "car-container">
          {myCars.map((car) => (   
              <Car  key={car.id} car={car} />      
            ))}

      </div>
    </div>
  )
}

export default App


//chamar cada carro de car, 
// importamos o Componente, passamos o car por propriedade e chamamos o car.name, car.color, car.km