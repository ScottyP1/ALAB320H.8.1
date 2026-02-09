import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import HomePage from './pages/Home.jsx'
import PeoplePage from './pages/PeoplePage.jsx'
import PlanetsPage from './pages/PlanetsPage.jsx'
import StarShipsPage from './pages/StarShipsPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { index: true, path: '/people', element: <PeoplePage /> },
            { index: true, path: '/planets', element: <PlanetsPage /> },
            { index: true, path: '/starships', element: <StarShipsPage /> },
        ],
    },
])

export default router
