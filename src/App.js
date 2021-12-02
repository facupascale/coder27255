import './App.css';
import NavBar from './components/navbar'
import ItemListContainer from './components/itemList/itemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">     
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path="/"
            element={<ItemListContainer />}
          />  
          <Route 
            path="/nosotros"
            element={<h1>Hola, esta es nuestra web</h1>}
          />  
          <Route 
            path="/producto/:prodId"
            element={<ItemDetailContainer />}
          />  
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
