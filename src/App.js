import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Footer } from './components';
import { Home, Features, SearchPage, ContactMe } from './pages';
import { useEffect } from 'react';

const Root = () => {
  return (
    <>
      <div className="bg-greySection dark:bg-blueRadialGradient overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/search-footprint" element={<SearchPage />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;
