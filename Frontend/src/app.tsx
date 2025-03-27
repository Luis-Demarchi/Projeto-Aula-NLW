import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { CreateTripPage } from "./createTrip"
import { TripDetailsPage } from "./tripDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}