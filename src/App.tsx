
import './App.css'
import Header from './components/Header'
import FooterComponent from './components/FooterComponent'
import BottomInfo from './components/BottomInfo'
import ContentComponent from './components/ContentComponent'
// import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/post' element={<ContentComponent flexBool={true}/>}/>
        </Routes>
        <FooterComponent/>
        <BottomInfo/>
    </div>
  )

}

export default App
