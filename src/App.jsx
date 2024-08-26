import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Cspm from './Components/CSPM/Cspm'
import Cwpp from './Components/CWPP/Cwpp'
import Register from './Components/Registery Scan/Register'
import Ap from './App.module.css';

function App() {
  return (
    <div className={Ap.home}>
      <Navbar/>
      <Header/>
      <Cspm/>
      <Cwpp/>
      <Register/>
    </div>
  )
}

export default App
