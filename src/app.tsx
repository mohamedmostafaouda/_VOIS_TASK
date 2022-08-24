import { LessonsFilters } from '@components/lessonsFilters/lessonsFilters';
import { Logo } from '@components/logo/logo';
import { MainPage } from 'pages/mainPage/mainPage';
import { PointPage } from 'pages/pointpage/pointPage';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='point/:country/:camp/:school' element={<PointPage />} />
      </Routes>
    </>
  );
};
export default App;
