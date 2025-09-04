import React from 'react';

const Dashboard = ({ data, user }) => {
  if (!data) return <div>جاري التحميل...</div>;

  const { analytics, events, readings } = data;
  
  // الحصول على آخر القراءات للمستخدم الحالي
  const userReadings = readings.filter(r => r.patient_id === user.id).slice(-10);
  const latestReading = userReadings[userReadings.length - 1];
  
  // الحصول على آخر الأحداث
  const recentEvents = events.slice(-5);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">مرحباً بك، {user.name}</h1>
        <p className="dashboard-subtitle">لوحة التحكم الرئيسية - المنصة الصحية الذكية</p>
      </div>

      {/* إحصائيات سريعة */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3 className="stat-number">{analytics.total_patients.toLocaleString()}</h3>
            <p className="stat-label">إجمالي المرضى</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3 className="stat-number">{analytics.total_readings.toLocaleString()}</h3>
            <p className="stat-label">إجمالي القراءات</p>
          </div>
        </div>
        
        <div className="stat-card alert-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3 className="stat-number">{analytics.alerts_last_24h}</h3>
            <p className="stat-label">تنبيهات آخر 24 ساعة</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3 className="stat-number">{user.points}</h3>
            <p className="stat-label">نقاطك الحالية</p>
          </div>
        </div>
      </div>

      {/* آخر القراءات */}
      {latestReading && (
        <div className="readings-section">
          <h2 className="section-title">آخر قراءاتك الطبية</h2>
          <div className="readings-grid">
            <div className="reading-card">
              <div className="reading-icon">❤️</div>
              <div className="reading-content">
                <h4 className="reading-value">{latestReading.hr}</h4>
                <p className="reading-label">نبضة/دقيقة</p>
              </div>
            </div>
            
            <div className="reading-card">
              <div className="reading-icon">🫁</div>
              <div className="reading-content">
                <h4 className="reading-value">{latestReading.spo2}%</h4>
                <p className="reading-label">الأكسجين</p>
              </div>
            </div>
            
            <div className="reading-card">
              <div className="reading-icon">🩺</div>
              <div className="reading-content">
                <h4 className="reading-value">{latestReading.bp_systolic}/{latestReading.bp_diastolic}</h4>
                <p className="reading-label">ضغط الدم</p>
              </div>
            </div>
            
            <div className="reading-card">
              <div className="reading-icon">🌡️</div>
              <div className="reading-content">
                <h4 className="reading-value">{latestReading.temp}°</h4>
                <p className="reading-label">درجة الحرارة</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* آخر الأحداث */}
      <div className="events-section">
        <h2 className="section-title">آخر الأحداث والتنبيهات</h2>
        <div className="events-list">
          {recentEvents.map(event => (
            <div key={event.id} className={`event-item event-${event.type}`}>
              <div className="event-icon">
                {event.type === 'alert' && '⚠️'}
                {event.type === 'sos' && '🚨'}
                {event.type === 'fall' && '⬇️'}
                {event.type === 'medication' && '💊'}
                {event.type === 'achievement' && '🏆'}
              </div>
              <div className="event-content">
                <p className="event-text">{event.text}</p>
                <span className="event-time">
                  {new Date(event.timestamp).toLocaleString('ar-SA')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* أزرار سريعة */}
      <div className="quick-actions">
        <h2 className="section-title">إجراءات سريعة</h2>
        <div className="actions-grid">
          <button className="action-btn emergency-btn">
            <span className="action-icon">🚨</span>
            <span className="action-text">طلب مساعدة طارئة</span>
          </button>
          
          <button className="action-btn">
            <span className="action-icon">📱</span>
            <span className="action-text">محاكاة قراءة الساعة</span>
          </button>
          
          <button className="action-btn">
            <span className="action-icon">💊</span>
            <span className="action-text">تذكير الأدوية</span>
          </button>
          
          <button className="action-btn">
            <span className="action-icon">📞</span>
            <span className="action-text">اتصال بالطبيب</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .dashboard-title {
          font-size: 2.5rem;
          color: #1a365d;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .dashboard-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .alert-card {
          border-right: 4px solid #dc3545;
        }

        .stat-icon {
          font-size: 3rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #1a365d;
          margin: 0;
        }

        .stat-label {
          font-size: 1rem;
          color: #666;
          margin: 5px 0 0 0;
        }

        .section-title {
          font-size: 1.8rem;
          color: #1a365d;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .readings-section {
          margin-bottom: 40px;
        }

        .readings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .reading-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 15px;
          border-right: 3px solid #0b5ed7;
        }

        .reading-icon {
          font-size: 2rem;
        }

        .reading-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a365d;
          margin: 0;
        }

        .reading-label {
          font-size: 0.9rem;
          color: #666;
          margin: 5px 0 0 0;
        }

        .events-section {
          margin-bottom: 40px;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .event-item {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .event-alert {
          border-right: 3px solid #ffc107;
        }

        .event-sos {
          border-right: 3px solid #dc3545;
        }

        .event-achievement {
          border-right: 3px solid #198754;
        }

        .event-icon {
          font-size: 1.5rem;
        }

        .event-text {
          font-size: 1rem;
          color: #333;
          margin: 0 0 5px 0;
        }

        .event-time {
          font-size: 0.85rem;
          color: #666;
        }

        .quick-actions {
          margin-bottom: 40px;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .action-btn {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .action-btn:hover {
          border-color: #0b5ed7;
          background: #f8f9ff;
          transform: translateY(-2px);
        }

        .emergency-btn {
          border-color: #dc3545;
          color: #dc3545;
        }

        .emergency-btn:hover {
          background: #fff5f5;
          border-color: #dc3545;
        }

        .action-icon {
          font-size: 1.5rem;
        }

        .action-text {
          font-weight: 600;
        }

        /* التصميم المتجاوب */
        @media (max-width: 768px) {
          .dashboard-container {
            padding: 15px;
          }

          .dashboard-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .readings-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .dashboard-title {
            font-size: 1.8rem;
          }

          .readings-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

