import './App.css';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import {Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Head from './Components/Head/Head';
import ListProduct from './Components/ListProduct/ListProduct';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/seller-login' element={<Login/>}/>
      <Route path='/seller-signup' element={<SignUp/>}/>
      <Route path='/admin' element={<Head/>}/>
      <Route path='/admin/addproduct' element={<AddProduct/>}/>
      <Route path='/admin/listproduct' element={<ListProduct/>}/>
    </Routes>
  );
}

export default App;
