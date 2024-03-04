import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Chart from './screens/coins/Chart'
import Coin from './screens/coins/coin'
import Coins from './screens/coins/coins'
import Price from './screens/coins/Price'
import NotFound from './screens/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'coins',
        element: <Coins />,
        children: [
          {
            path: ':coinId',
            element: <Coin />,
            children: [
              {
                path: 'price',
                element: <Price />,
              },
              {
                path: 'chart',
                element: <Chart />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
])
export default router
