const Challenge = () => {
  const a = 10
  const b = 15

  const somar = () => {
    console.log(a + b);
  }
  return (
    <div>Challenge
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => console.log(a + b)}>
        Clique para ver a soma!
      </button>
      <button onClick={somar}>Somar</button>
    </div>
  )
}

export default Challenge