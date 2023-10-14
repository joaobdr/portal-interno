import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
// import NaoEncontrada from './NaoEncontrada';

import './css/resetStyle.css'
import Home from './Pages/Main';

const App = () => {
  const [login, setLogin] = React.useState(false);
  const [infoUser, setInfoUser] = React.useState('')

  return <BrowserRouter>

          {/* <Header /> */}

          <Routes>
            <Route path="/" element={login ? <Home infoUser={infoUser} setLogin={setLogin}/>: <Login setLogin={setLogin} setInfoUser={setInfoUser} />} />
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
  
};

export default App;
