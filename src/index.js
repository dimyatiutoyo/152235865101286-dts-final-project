import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ThemeProvider } from '@mui/system';
import Home from './pages/Home';
import { createTheme } from '@mui/material/styles';
import { blue, red, yellow } from '@mui/material/colors';
import Recipe from './pages/Recipe';
import RecipesByCategory from './pages/RecipesByCategory';
import Search from './pages/Search';
import Register from './pages/Register';
import RouteGuard from './pages/RouteGuard';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/resep/kategori/:key' element={<RecipesByCategory />} />
          <Route path='/resep/:key' element={
            <RouteGuard loginOnly={true}>
              <Recipe />
            </RouteGuard>
          } />
          <Route path='/cari/:title' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
