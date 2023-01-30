import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'

import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const AppRoutes = () => useRoutes([
  { path: "/", element: <Login /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "*", element: <Login /> },
])

function App() {
  return (<div className='App'>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </div>);
}

export default App;
