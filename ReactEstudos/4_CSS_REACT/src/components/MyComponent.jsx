import React from 'react'
import './MyComponent.css'

const MyComponent = () => {
    return (
        <div>
            <h1>CSS de Componente</h1>
            <p>Este é o parágrafo do componente</p>
            <p className='my-comp-paragraph'>Teste com className</p>
            <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>CSS inline exemplo</p>
            
        </div>
    )
}

export default MyComponent