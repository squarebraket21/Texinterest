import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Internship from './pages/sc';
import Sb from './pages/sb';
import HolidayManagement from './pages/Holiday Management';
import Attendancemanagement from './pages/Attendancemanagement'
import Interview from './pages/Interview';
import Courses from './pages/Courses';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />  {/* Common header on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sc" element={<Internship/>} />
        <Route path="/sb" element={<Sb />} />
        <Route path="/holidaymanagement" element={<HolidayManagement />} />
        <Route path="/attendancemanagement" element={<Attendancemanagement />} />
        <Route path="/interviews" element={<Interview/>} />
        <Route path='/Courses' element={<Courses/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
