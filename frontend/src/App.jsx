
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements , Navigate} from 'react-router-dom'
import { useAuthContext } from './hook/useAuthContext'

import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  const { user } = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={user ?  <Home />: <Navigate to= "/login" />} />
        <Route path='/SignUp' element={ !user ? <Signup /> : <Navigate to ="/" /> } />
        <Route path='/Login' element={ !user ?  <Login /> : <Navigate to ="/" />} />
      </Route>
    )
  )
  return (
   <RouterProvider router={router} />
  )
}

export default App
