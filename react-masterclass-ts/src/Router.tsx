import { createBrowserRouter } from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent'
import Root from './Root'
import About from './screens/About'
import Home from './screens/Home'
import NotFound from './screens/NotFound'
import Followers from './screens/users/Follwers'
import User from './screens/users/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'home',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
])
export default router
