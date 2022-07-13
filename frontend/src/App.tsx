import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {
  return (
    <>
      <Header />
      <h1>Teste Metas</h1>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
