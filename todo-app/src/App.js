import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Pending from './Components/Pending';
import Completed from './Components/Completed';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Add />
    },
    {
      path: '/pending',
      element: <Pending />
    },
    {
      path: '/comp',
      element: <Completed />
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
