import './App.css';
import {Routes, Route} from 'react-router-dom'
import Edit from './views/Edit'
import Main from './views/Main'
import New from './views/New'

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/authors' element={<Main/>} />
        <Route path='/authors/new' element={<New/>} />
        <Route path='/authors/:id/edit' element={<Edit/>} />
      </Routes>

    </div>
  );
}

export default App;
