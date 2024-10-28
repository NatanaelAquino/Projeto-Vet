import './App.css'
import { BottomNavigation } from './components/BottomNavigation/BottomNavigation'
import CameraCapture from './components/camera/CameraCapture'
import Logotipo from './components/Logotipo/Logotipo'
import Calculo from './pages/calculo/Calculo'
import Home from './pages/Home/Home'

function App() {
  return (
  <div className='App'>
    <Logotipo/>
    <Calculo/>
    <BottomNavigation/>
  </div>
  )
}

export default App
