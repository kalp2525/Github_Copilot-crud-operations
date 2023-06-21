import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components_user/Home';
import AddUser from './components_user/AddUser';
import UpdateUser from './components_user/UpdateUser';
import DeleteUser from './components_user/DeleteUser';

import HomeGrievances from './components/HomeGrievances';
import AddGrievances from './components/AddGrievances';
import UpdateGrievances from './components/UpdateGrievances';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* //React Router Route for crud operations */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
        <Route path="/DeleteUser" element={<DeleteUser />} />
        <Route path="*" element={<h1>Not Found</h1>} /> */}

        {/* //React Router Route for crud operations for Grievance */}
        <Route path="/" element={<HomeGrievances />} />
        <Route path="/AddGrievance" element={<AddGrievances />} />
        <Route path="/UpdateGrievance/:id" element={<UpdateGrievances />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </div>
  );
}

export default App;
