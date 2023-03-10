import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/router';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, [])


  return (
    <div>
      <RouterProvider
        router={router}
      ></RouterProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'rgb(47, 57, 66)',
              color: 'white'
            },
          },
          error: {
            style: {
              background: 'rgb(47, 57, 66)',
              color: 'white'
            },
          },
        }}
      ></Toaster>
    </div>
  );
}

export default App;
