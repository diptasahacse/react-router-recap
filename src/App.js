import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacts" element={<Contacts></Contacts>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
