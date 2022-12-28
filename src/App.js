import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import bg from './images/bg.png'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import Footer from './components/Footer/Footer';
import Lessons from './Pages/Lessons/Lessons';
import Lesson from './Pages/Lesson/Lesson';
import LessonID from './Pages/LessonID/LessonID';
import Tests from './Pages/tests/Tests';
import Quiz from './Pages/Quiz/Quiz';
import Webcam from './Pages/Webcam/Webcam';
import HandPose from './Pages/HandPose/HandPose';
// import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Consonants from './Pages/Consonants/Consonants';
import Login from './Pages/Authentication/Login'
import Signup from './Pages/Authentication/Signup'

// style={{backgroundImage:`url(${bg})`,  }}

function App() {
  return (
    <div className="App" >
      <Router>
          <NavBar />
          {/* <HomePage /> */}
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="lessons" element={<Lessons />}/>
            <Route path="lessons/lesson" element={<Lesson />}/>
            <Route path="lessons/lesson/:id" element={<LessonID />}/>
            <Route path="Consonants/Consonants" element={<Consonants />}/>
            <Route path="tests" element={<Tests />}/>
            <Route path="quiz" element={<Quiz />}/>
            <Route path="tests/webcam" element={<HandPose />}/>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="profile" element={<Profile />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
