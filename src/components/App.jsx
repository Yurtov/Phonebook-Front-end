import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home/Home';
import { useAuth } from './hooks';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Login />} />
        }
      />
      <Route
        path="/registration"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Register />} />
        }
      />
      <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
