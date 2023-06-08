import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* //React Router Route for crud operations */}
        <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
        <Route path="/DeleteUser" element={<DeleteUser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
