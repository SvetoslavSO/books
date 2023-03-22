import './App.css';
import { MainPage } from './pages/MainPage/MainPage';
import { BookPage } from './pages/BookPage/BookPage';
import { NotFound } from './pages/NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';

export const App = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/volume/:book' element={<BookPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}