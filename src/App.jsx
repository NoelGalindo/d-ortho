import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginForm} from './pages/Auth.jsx';
import { Almacen } from './pages/Almacen.jsx';
import useToken from './hooks/Auntentication.jsx';

function App() {

  const {token, setToken} = useToken();

  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={<LoginForm setToken={setToken}/>} />  */}
        <Route index element={<Almacen />}>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
