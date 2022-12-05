import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import CheckOut from '../Pages/CheckOut/CheckOut';
import PaymentFail from '../Pages/CheckOut/PaymentFail';
import PaymentSuccess from '../Pages/CheckOut/PaymentSuccess';
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
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {
                path: '/orders',
                element: <PrivateRouter><Orders></Orders></PrivateRouter>
            },
            {
                path: '/payment/success',
                element: <PrivateRouter><PaymentSuccess></PaymentSuccess></PrivateRouter>
            },
            {
                path: '/payment/fail',
                element: <PrivateRouter><PaymentFail></PaymentFail></PrivateRouter>
            }
        ]
    }
])

export default router;