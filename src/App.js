import logo from './logo.svg';
import './App.css';
import Register from './Componets/Register';
import Login from './Componets/Login';
import Home from './Componets/Home';
import Cart from './Componets/Cart';
import Wishlist from './Componets/Wishlist';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Component from './Componets/Component';
import Header from './Componets/Header';
// import './Style.css';



function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path = '/register' element = {<Register/>}/>
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/home' element = {<Home/>} />
      <Route path = '/component' element = {<Component/>} />
      <Route path = '/cart' element = {<Cart/>} />
      <Route path = '/header' element = {<Header/>} />
      <Route path='/wishlist' element = {<Wishlist/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
