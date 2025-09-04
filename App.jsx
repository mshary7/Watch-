import React, { useState, useEffect } from 'react';
import './App.css';

// مكونات الموقع
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PatientProfile from './components/PatientProfile';
import DoctorPortal from './components/DoctorPortal';
import GovernmentPortal from './components/GovernmentPortal';
import Store from './components/Store';
import Community from './components/Community';
import Lectures from './components/Lectures';
import Watch3D from './components/Watch3D';
import Assistant from './components/Assistant';
import Footer from './components/Footer';

// قاعدة البيانات الوهمية
import { generateMockData } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mockData, setMockData] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    id: 'patient_001',
    name: 'أحمد محمد السعيد',
    role: 'patient',
    points: 1250
  });

  useEffect(() => {
    // تحميل قاعدة البيانات الوهمية الكبيرة
    const data = generateMockData();
    setMockData(data);
  }, []);

  if (!mockData) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>جاري تحميل المنصة الصحية الذكية...</p>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard data={mockData} user={currentUser} />;
      case 'profile':
        return <PatientProfile data={mockData} user={currentUser} />;
      case 'doctor':
        return <DoctorPortal data={mockData} />;
      case 'government':
        return <GovernmentPortal data={mockData} />;
      case 'store':
        return <Store data={mockData} user={currentUser} />;
      case 'community':
        return <Community data={mockData} />;
      case 'lectures':
        return <Lectures data={mockData} />;
      case 'watch3d':
        return <Watch3D />;
      case 'assistant':
        return <Assistant user={currentUser} />;
      default:
        return <Dashboard data={mockData} user={currentUser} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        user={currentUser}
      />
      
      <main className="main-content">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
