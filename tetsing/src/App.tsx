

function App() {

const config = {
  database: import.meta.env.VITE_URL,
}

console.log(config.database);

  return (
    <>
       <div>
        hslo
       </div>
    </>
  )
}

export default App
