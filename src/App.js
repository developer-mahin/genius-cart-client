import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">

      {/* http://localhost:5000/ */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
