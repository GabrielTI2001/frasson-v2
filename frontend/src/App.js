import logo from './logo.svg';
import { Helmet } from "react-helmet";
import {BrowserRouter} from 'react-router-dom'
import FrassonRoutes from './app/routes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin='anonymous'/>
          <link rel="icon" href="./assets/media/favicons/frasson-logo.png"></link>
          <title>Frasson</title>
      </Helmet>
      <FrassonRoutes/>
    </BrowserRouter>
  );
}

export default App;
