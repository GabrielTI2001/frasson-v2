import {BrowserRouter} from 'react-router-dom'
import FrassonRoutes from './app/routes'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <BrowserRouter>
      <FrassonRoutes/>
    </BrowserRouter>
  );
}

export default App;
