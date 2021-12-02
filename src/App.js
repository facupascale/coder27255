import './App.css';
import NavBar from './components/navbar'
import ItemListContainer from './components/itemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer text={'Hola'} />
    </div>
  );
}

export default App;
