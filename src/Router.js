import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import App from './App';
import Dashboard from './layout/Dashboard';
const MyRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
    </Routes>
  )
}

export default MyRouter