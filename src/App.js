import logo from './logo.svg';
import {createBrowserRouter, 
  RouterProvider,
  Router,
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react';
import Menu from './Components/Menu';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  }, 
  {
    path:"/menu",
    element: <Menu/>
  }
])

import Home from './Components/Home';
import { MyContext } from './MyContext';
import {Container} from './styles'

function App() {
  const [prodSelect, setProdSelect]= useState([])
  return (
      <MyContext.Provider value={{prodSelect, setProdSelect}}>
    <Container>

    <BrowserRouter>
    <Routes>
      <Route index path="/geradormenu" element={<Home/>} />
    {/*   <Route index path="/" element={<Home/>} /> */}
      <Route  path="/geradormenu/menu" element={<Menu/>} />
    </Routes>
    </BrowserRouter>
    </Container>
      </MyContext.Provider>
  );
}

export default App;
