import './App.scss';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import AssessmentPage from './pages/AssessmentPage';
import AssessmentsTable from './components/AssessmentsTable/AssessmentsTable';
import CreateNewAssessment from './components/NewAssessment/CreateNewAssessment';
import Router from './router/Router';

function App() {
  return (
    <div className="App" style={{position:"relative"}}>
    <Router></Router>
    </div>
  );
}

export default App;
