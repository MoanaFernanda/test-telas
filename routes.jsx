import React from 'react';
import CounterPage from './pages/CounterPage';
import FormPage from './pages/FormPage';


const routes = [
  { path: '/form', element: <FormPage /> },
  { path: '/students', element: <StudentsPage /> },
];
export default routes;