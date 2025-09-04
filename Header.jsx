import React, { useState } from 'react';

const Header = ({ currentPage, setCurrentPage, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: '📊' },
    { id: 'profile', label: 'ملفي الصحي', icon: '👤' },
    { id: 'doctor', label: 'لوحة الطبيب', icon: '👨‍⚕️' },
    { id: 'government', label: 'لوحة الحكومة', icon: '🏛️' },
    { id: 'store', label: 'المتجر', icon: '🛒' },
    { id: 'community', label: 'المجتمع', icon: '👥' },
    { id: 'lectures', label: 'المحاضرات', icon: '📚' },
    { id: 'watch3d', label: 'الساعة 3D', icon: '⌚' },
    { id: 'assistant', label: 'المساعد الطبي', icon: '🤖' }
  ];

  return (
    <header className="medical-header">
      <div className="header-container">
        {/* الشعار */}
        <div className="logo-section">
          <div className="logo-icon">⌚</div>
          <div className="logo-text">
            <h1 className="logo-title">منصة الساعة الطبية</h1>
            <p className="logo-subtitle">المنصة الصحية الذكية</p>
          </div>
        </div>

        {/* معلومات المستخدم */}
        <div className="user-info">
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-points">النقاط: {user.points}</span>
          </div>
          <div className="user-avatar">👤</div>
        </div>

        {/* زر القائمة للجوال */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="فتح القائمة"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* القائمة الرئيسية */}
      <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-container">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'nav-item-active' : ''}`}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <style jsx>{`
        .medical-header {
          background: linear-gradient(135deg, #0b5ed7, #198754);
          color: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .logo-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .logo-subtitle {
          font-size: 0.9rem;
          opacity: 0.9;
          margin: 0;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .user-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .user-points {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .user-avatar {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          padding: 8px;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .main-nav {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 20px;
          display: flex;
          gap: 5px;
          overflow-x: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: none;
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 0.9rem;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .nav-item-active {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .nav-icon {
          font-size: 1.2rem;
        }

        .nav-label {
          font-weight: 500;
        }

        /* التصميم المتجاوب */
        @media (max-width: 768px) {
          .header-container {
            padding: 12px 15px;
          }

          .logo-title {
            font-size: 1.2rem;
          }

          .logo-subtitle {
            font-size: 0.8rem;
          }

          .user-details {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #0b5ed7, #198754);
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          }

          .nav-open {
            display: block;
          }

          .nav-container {
            flex-direction: column;
            gap: 5px;
            padding: 15px;
          }

          .nav-item {
            justify-content: flex-start;
            padding: 15px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .logo-icon {
            font-size: 2rem;
          }

          .logo-title {
            font-size: 1.1rem;
          }

          .user-avatar {
            font-size: 1.5rem;
            padding: 6px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

