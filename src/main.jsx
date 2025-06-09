import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Services from './Pages/Services'
import ServiceDetail from './Pages/ServiceDetail'
// import About from './Pages/About'
import Layout from './Components/layout'
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About'
import './i18n/i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // {
      //   path: 'about',
      //   element: <About />
      // },
      {
        path: 'services',
        element: <Services />
      },     {
        path: 'about',
        element: <About />
      },
      {
        path: 'services/:id',
        element: <ServiceDetail />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

import LanguageSwitcher from './Components/LanguageSwitcher';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <LanguageSwitcher />
  </StrictMode>
);
