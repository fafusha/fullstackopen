const App = () => {
  const now = new Date()
  const a = 10
  const b = 21
  return(
  <div>
    <p>Hello World!</p>
    <p>It is {now.toString()}</p>
    <p>{a} plus {b} is {a+b}</p>
  </div>
  )
}

export default App