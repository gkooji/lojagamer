import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from'./pages/login'
import Error from './pages/Error'
import Jogos from './pages/Jogos'
import Login from './pages/Login'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Jogos/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
