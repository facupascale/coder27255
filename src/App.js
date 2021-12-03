import './App.css';
import NavBar from './components/navbar'
import ItemListContainer from './components/itemList/itemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import CartView from './components/cartView/cartView';
import Checkout from './components/checkout/checkout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer />}
            />
            <Route
              path="/category/:categoryId"
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
            <Route
              path="/cart"
              element={<CartView />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
