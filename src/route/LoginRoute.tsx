import React from 'react'
import { Navigate, Route } from "react-router-dom"
import { isAuth } from '../helpers/Auth';
export function PrivateRoute({ children } :any) {


  const auth = isAuth();
  return auth ? children : <Navigate to="/login" />;
}