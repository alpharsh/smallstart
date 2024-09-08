import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import ServicesPage from './components/ServicesPage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='' element={<App />} />
    <Route path='contact' element={<Contact /> } />
    <Route path='services' element={<ServicesPage /> } />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)