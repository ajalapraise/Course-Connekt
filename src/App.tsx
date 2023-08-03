import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/scrollFromTop/ScrollFromTop'

import Homepage from './pages/homepage/Homepage'
import Courses from './pages/courses/Courses'
import MainLayout from './components/mainlayout/MainLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Faq from './pages/faq/Faq'
import About from './pages/AboutUs/About'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route >
            <Route index element={<Homepage />} />
            <Route path="/courses/" element={<Courses />} />
            <Route path="/courses/:id" element={<Dashboard />} />
            <Route path="/faq" element={<Faq question={''} answer={''} id={0} />} />
            <Route path="/aboutUs" element={<About />} />

          </Route>
        </Routes>
      </MainLayout>

    </BrowserRouter >


  )
}

export default App
