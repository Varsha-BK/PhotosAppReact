import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ViewPhoto from './Components/ViewPhoto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ViewPhoto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
