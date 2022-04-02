import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import App from './App';
import Customers from './layout/Customers';
import Dashboard from './layout/Dashboard';
const MyRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/customers" element={<Customers/>} />
        </Route>
    </Routes>
  )
}

export default MyRouter