import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './helpers/auth/AuthProvider'

function App() {


  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  )
}

export default App
