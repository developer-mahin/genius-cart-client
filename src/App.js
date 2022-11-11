import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">

      {/* https://genius-car-server008-developer-mahin.vercel.app/ */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
