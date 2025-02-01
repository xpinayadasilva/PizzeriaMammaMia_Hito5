import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import Pizza from '../pages/Pizza'
import Profile from '../components/Profile'
import MainLayout from '../assets/layouts/MainLayOut.jsx'
import NotFound from '../components/NotFound.jsx'

const routes=[
    {
        path: '/',
        element: 
        <MainLayout>
            <Home />
        </MainLayout>
    },    
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    {path: '/cart', element: <Cart />},
    {
        path: '/pizza',
        element: 
        <MainLayout>
            <Pizza />
        </MainLayout>
    },
    {path: '/profile', element: <Profile />},
    {path: '/*', element: <NotFound />},
]

export default routes;