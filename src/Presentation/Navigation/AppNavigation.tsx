import { Box, Container } from '@chakra-ui/react';
import { LoginScreen } from 'Presentation/Screens';
import { useStore } from 'Store';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = observer(({ children } : { children: any}) => {
  const { authStore } = useStore()
  const auth = authStore.isAuthenticated();
  return auth ? <>{children}</> : <Navigate to="/login" />;
})

const PublicRoute = observer(({ children } : { children: any}) => {
  const { authStore } = useStore()
  const auth = !authStore.isAuthenticated();
  return auth ? <>{children}</> : <Navigate to="/" />;
})


export const AppNavigation = observer(() => {
  return (
    <Router>
      <Routes >
        <Route path="/login" element={<PublicRoute>
          <LoginScreen />
        </PublicRoute>} />
        <Route path="/" element={
          <PrivateRoute>
            <Box>
              Hola estas logeado
            </Box>
          </PrivateRoute>} />
      </Routes>
    </Router>
  )
})



