import Datas from "./database/Datas";
import Cards from "./components/Cards"
import './App.css';

function App() {

  return (
    <div className="App">
    <h1>Languages</h1>
      <div className="container">
        {Datas.map((cards) => (
          <Cards key={cards.name} {...cards} />
        ))}
      </div>
    </div>
  );
}

export default App;
