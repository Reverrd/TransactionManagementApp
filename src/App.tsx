import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './pages/Dashboard';
import TransactionForm from './components/transactions/TransactionForm';
import Home from './pages/Home';

const App: React.FC = () => {
 

  // Private route component

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/logout" element={<Logout />} /> */}
        <Route path='/transactionForm' element={<TransactionForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
