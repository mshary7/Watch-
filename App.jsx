import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Activity, Users, Clock, Stethoscope, Shield, BookOpen, Hospital, Menu, X } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">الساعة الطبية</h1>
                <p className="text-sm text-gray-600">المنصة الصحية الوطنية الذكية</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">المميزات</a>
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">لوحة التحكم</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">حول المشروع</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">المميزات</a>
                <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">لوحة التحكم</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">حول المشروع</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              نموذج أولي تجريبي متكامل
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              المنصة الصحية الوطنية الذكية
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              نظام متكامل يجمع ساعة طبية قابلة للارتداء، مساعد طبي ذكي، ومنصة ويب تربط المريض بالطبيب والجهات الصحية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Activity className="mr-2 h-5 w-5" />
                تجربة النموذج الأولي
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                تعرف على المشروع
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">مكونات النظام</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نظام شامل يدعم الطب الوقائي والتشخيص المبكر من خلال التقنيات الذكية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-red-100 p-3 rounded-lg w-fit">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">الساعة الطبية الذكية</CardTitle>
                <CardDescription>
                  جهاز قابل للارتداء يراقب العلامات الحيوية على مدار الساعة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• مراقبة النبض وضغط الدم</li>
                  <li>• قياس مستوى الأكسجين</li>
                  <li>• تتبع النوم والنشاط</li>
                  <li>• إنذار الطوارئ SOS</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">المساعد الطبي الذكي</CardTitle>
                <CardDescription>
                  مساعد ذكي يقدم الاستشارات الطبية والتوجيهات الصحية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• استشارات طبية فورية</li>
                  <li>• تذكير بالأدوية</li>
                  <li>• تحليل البيانات الصحية</li>
                  <li>• توصيات طبية مخصصة</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <Hospital className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">منصة الربط الطبي</CardTitle>
                <CardDescription>
                  منصة تربط المرضى بالأطباء والجهات الصحية الحكومية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ملف طبي إلكتروني شامل</li>
                  <li>• تواصل مباشر مع الأطباء</li>
                  <li>• تقارير للجهات الصحية</li>
                  <li>• نظام نقاط ومكافآت</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">لوحات التحكم</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              واجهات مخصصة لكل فئة من المستخدمين
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">لوحة المريض</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  عرض شامل للحالة الصحية والقراءات والأدوية
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>المرضى المسجلين</span>
                    <span className="font-semibold text-blue-600">5,000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>القراءات اليومية</span>
                    <span className="font-semibold text-green-600">50,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Stethoscope className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-lg">لوحة الطبيب</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  متابعة المرضى وإدارة الحالات الطبية
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>الأطباء المشاركين</span>
                    <span className="font-semibold text-blue-600">200+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>الاستشارات اليومية</span>
                    <span className="font-semibold text-green-600">1,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-lg">لوحة الجهات الحكومية</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  إحصائيات شاملة ومؤشرات الصحة العامة
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>التنبيهات الطارئة</span>
                    <span className="font-semibold text-red-600">24/7</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>التقارير الشهرية</span>
                    <span className="font-semibold text-blue-600">متاحة</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">حول المشروع</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              هذا النموذج الأولي يهدف إلى إثبات جدوى الفكرة وقابليتها للتنفيذ التقني. 
              يحتوي على قاعدة بيانات كبيرة محاكاة وتصميم واقعي يظهر سيناريوهات حقيقية 
              من رصد القراءات الطارئة إلى إشعار الأطباء والجهات المسؤولة.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    الهدف من النموذج
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-right space-y-2 text-sm text-gray-600">
                    <li>• إثبات قيمة الفكرة عملياً</li>
                    <li>• تسهيل العرض للمستشارين والوزارات</li>
                    <li>• إظهار قابلية التنفيذ التقني</li>
                    <li>• عرض الاحتياجات للتطوير الصناعي</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5 text-green-600" />
                    المؤشرات التقنية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-right space-y-2 text-sm text-gray-600">
                    <li>• 5,000+ مريض محاكي في قاعدة البيانات</li>
                    <li>• 500,000+ قراءة طبية</li>
                    <li>• استجابة المساعد أقل من ثانية واحدة</li>
                    <li>• تقارير PDF جاهزة لكل مريض</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* حقوق الملكية */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
                <Heart className="ml-2 h-5 w-5 text-red-400" />
                حقوق الملكية
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                جميع الحقوق محفوظة © 2025 – منصة الساعة الطبية
              </p>
            </div>

            {/* رؤية 2030 */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 flex items-center justify-center">
                <BookOpen className="ml-2 h-5 w-5 text-green-400" />
                رؤية 2030
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                يدعم أهداف رؤية السعودية 2030 – جودة الحياة والتحول الصحي الرقمي
              </p>
            </div>

            {/* أسماء الفريق */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
                <Hospital className="ml-2 h-5 w-5 text-blue-400" />
                فريق العمل
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="font-medium">مشاري أبو زيدة</span> – قائد المشروع وصاحب الفكرة</p>
                <p><span className="font-medium">فراس عبدالسلام</span> – تصميم وتجربة مستخدم</p>
                <p><span className="font-medium">مازن خورشيد</span> – قاعدة بيانات وتطوير</p>
              </div>
            </div>
          </div>

          {/* خط فاصل */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-gray-400">للصحة</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-400">للمحاضرات</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hospital className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">للمستشفيات</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center">
                المنصة الصحية الوطنية الذكية - نحو مستقبل صحي أفضل
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

