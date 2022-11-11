import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Orders from '../Pages/Orders/Orders';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRouter from './PrivateRouter/PrivateRouter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => {
                    return fetch(`https://genius-car-server008-developer-mahin.vercel.app/services/${params.id}`)
                }
            },
            {
                path: '/orders',
                element: <PrivateRouter><Orders></Orders></PrivateRouter>
            }
        ]
    }
])

export default router;