import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './i18n/i18n';
import LanguageSwitcher from './Components/LanguageSwitcher';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Partners from './Pages/Partners';

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
      },
      {
        path: 'partners',
        element: <Partners />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <LanguageSwitcher />
  </StrictMode>
);
