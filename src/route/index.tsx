import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import { PrivateRoute } from './LoginRoute';

function Index() {
    const location = useLocation();
    const navigator = useNavigate();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="*" element={
                <h1>Not found</h1>
            } />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <h1>home</h1>
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={

                  <Login/>

                }
                
            />
              <Route
                path="/register"
                element={

                  <Register/>

                }
            />
        </Routes>
    );
}

export default Index;
