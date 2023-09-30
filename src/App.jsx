import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Report from './pages/Report/Report'
import Admin from './components/AdminLogin/ALogin'
import DataCollection from './pages/DataCollection/DataCollection'
import Policies from './pages/Policies/Policies'
import ReportExplorer from './pages/Report/ReportExplorer'
import AreaReason from './pages/Report/StateReason'
import DC from './pages/DataCollection/DC'

function App() {
  const officialName = localStorage.getItem('officerName')
  const token = localStorage.getItem('officerToken')

  return (
    <>
      <main>
        <header>
          <Header />
        </header>

        <div className='main-content'>
          <div className='sidebar'>
            <Sidebar />
          </div>

          <div className='content'>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/login' Component={Login} />
              <Route path='/report' Component={Report} />
              <Route path='/admin' Component={Admin}></Route>
              <Route path='/dataCollection' Component={DC}></Route>
              <Route path='/policies' Component={Policies}></Route>
              <Route path='/DetailedGraph' Component={ReportExplorer}></Route>
              <Route path='/DetailedAreaGraph' Component={AreaReason}></Route>
              <Route path='*' Component={Home}></Route>
            </Routes>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}

export default App
