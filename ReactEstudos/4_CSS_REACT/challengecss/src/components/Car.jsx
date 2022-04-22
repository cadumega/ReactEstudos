import styles from './Car.module.css'

const Car = ({car}) => {  
  return (
    <div className= {styles.card}>
        <h1>{car.name}</h1>
        <p>KM: {car.km}</p>
        <p>Cor: {car.color}</p>
    </div>
  )
}

export default Car


// recebemos um objeto do car para pegar as props dele, colocamos desestruturado nos h1 e p