import './App.css'
import Card from './components/cards/cards';
import data from './mooks/data.json'


function App() {
  return (
    <main style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", border: "0.5px solid black" }}>
      <div className="col">
        <section>
          {data.map((i) => {
            if (i.nivel === 1) {
              return (
                  <Card info={i.perfil} handle={true}></Card>
              )
            }
          })}
        </section>
        <footer className="col-footer">
          1
        </footer>
      </div>
      <div className="col">
      <section>
          {data.map((i) => {
            if (i.nivel === 2) {
              return (
                  <Card info={i.perfil} handle={true}></Card>
              )
            }
          })}
        </section>
        <footer className="col-footer">
          2
        </footer>
      </div>
      <div className="col">
      <section>
          {data.map((i) => {
            if (i.nivel === 3) {
              return (
                  <Card info={i.perfil} handle={true}></Card>
              )
            }
          })}
        </section>
        <footer className="col-footer">
          3
        </footer>
      </div>
      <div className="col">
      <section>
          {data.map((i) => {
            if (i.nivel === 4) {
              return (
                  <Card info={i.perfil} handle={true}></Card>
              )
            }
          })}
        </section>
        <footer className="col-footer">
          4
        </footer>
      </div>
      <div className="col">
      <section>
          {data.map((i) => {
            if (i.nivel === 5) {
              return (
                  <Card info={i.perfil} handle={true}></Card>
              )
            }
          })}
        </section>
        <footer className="col-footer">
          5
        </footer>
      </div>
      <div className="col">
      <section>
          {data.map((i) => {
            if (i.nivel === 6) {
              return (
                  <Card info={i.perfil} handle={true}></Card>
              )
            }
          })}
        </section>
        <footer className="col-footer">
          6
        </footer>
      </div>
    </main>


  )
}


export default App;

