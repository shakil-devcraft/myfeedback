
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <section className='text-l-color font-roboto'>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  )
}

export default App
