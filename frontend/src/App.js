import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import FrassonRoutes from './app/routes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <FrassonRoutes/>
    </BrowserRouter>
  );
}

export default App;
