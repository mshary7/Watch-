import React from 'react';

const Footer = () => {
  return (
    <footer className="medical-footer">
      <div className="footer-container">
        {/* حقوق الملكية */}
        <div className="footer-section copyright-section">
          <div className="footer-icon">❤️</div>
          <p className="copyright-text">
            جميع الحقوق محفوظة © 2025 – منصة الساعة الطبية
          </p>
        </div>

        {/* رؤية 2030 */}
        <div className="footer-section vision-section">
          <div className="footer-icon">🏥</div>
          <p className="vision-text">
            يدعم أهداف رؤية السعودية 2030 – جودة الحياة والتحول الصحي الرقمي
          </p>
        </div>

        {/* أسماء الفريق */}
        <div className="footer-section team-section">
          <div className="footer-icon">📚</div>
          <h4 className="team-title">فريق العمل</h4>
          <div className="team-members">
            <div className="team-member">
              <span className="member-name">مشاري أبو زيدة</span>
              <span className="member-role">قائد المشروع وصاحب الفكرة</span>
            </div>
            <div className="team-member">
              <span className="member-name">فراس عبدالسلام</span>
              <span className="member-role">تصميم وتجربة مستخدم</span>
            </div>
            <div className="team-member">
              <span className="member-name">مازن خورشيد</span>
              <span className="member-role">قاعدة بيانات وتطوير</span>
            </div>
          </div>
        </div>

        {/* معلومات إضافية */}
        <div className="footer-section info-section">
          <div className="footer-links">
            <a href="#privacy" className="footer-link">سياسة الخصوصية</a>
            <a href="#terms" className="footer-link">شروط الاستخدام</a>
            <a href="#contact" className="footer-link">اتصل بنا</a>
            <a href="#support" className="footer-link">الدعم الفني</a>
          </div>
          <div className="footer-social">
            <span className="social-text">تابعنا على:</span>
            <div className="social-icons">
              <a href="#twitter" className="social-link" aria-label="تويتر">🐦</a>
              <a href="#linkedin" className="social-link" aria-label="لينكد إن">💼</a>
              <a href="#youtube" className="social-link" aria-label="يوتيوب">📺</a>
            </div>
          </div>
        </div>
      </div>

      {/* شريط سفلي إضافي */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-bottom-text">
            منصة الساعة الطبية - نحو مستقبل صحي رقمي متقدم
          </p>
          <p className="footer-version">
            الإصدار 1.0.0 | آخر تحديث: ديسمبر 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

