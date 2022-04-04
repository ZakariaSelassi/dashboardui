import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import App from './App';
import Customers from './layout/Customers';
import Dashboard from './layout/Dashboard';
import NotFound from './layout/NotFound';
import Login from './layout/Login';
import Register from './layout/Register';
import Settings from './layout/Settings';
import Products from './layout/Products';
import Account from './layout/Account';
const MyRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/product" element={<Products/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/error" element={<NotFound/>} />
        </Route>
    </Routes>
  )
}

export default MyRouter