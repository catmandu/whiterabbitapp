import Login from './components/pages/Login';
import ActivePackageForm from './components/pages/ActivePackageForm';
import './App.css';
import ActivePackageProvider from './context/main/activePackages/ActivePackageProvider';
import HourPackageProvider from './context/main/hourPackages/HourPackageProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HourPackageProvider>
      <ActivePackageProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/package' element={<ActivePackageForm />} />
          </Routes>
        </Router>
      </ActivePackageProvider>
    </HourPackageProvider>
  );
};

export default App;
