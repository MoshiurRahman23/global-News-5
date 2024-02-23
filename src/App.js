import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
