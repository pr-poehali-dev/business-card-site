import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1F2937]">ЮрКонсалт</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-[#1F2937] transition-colors">Главная</a>
            <a href="#services" className="text-gray-600 hover:text-[#1F2937] transition-colors">Услуги</a>
            <a href="#practice" className="text-gray-600 hover:text-[#1F2937] transition-colors">Судебная практика</a>
            <a href="#contacts" className="text-gray-600 hover:text-[#1F2937] transition-colors">Контакты</a>
          </div>
          <Button className="bg-[#1F2937] hover:bg-[#374151] text-white">
            Консультация
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
              Профессиональная правовая поддержка
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Надежные юридические консультации и правовая поддержка для вашего бизнеса. 
              Защищаем ваши интересы на всех этапах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1F2937] hover:bg-[#374151] text-white">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/44cc9a4a-44a8-4d30-a1c0-2db1b0da2c5c.jpg" 
              alt="Профессиональный юридический офис"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Комплексное юридическое сопровождение</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Scale" size={24} className="text-[#1F2937]" />
                </div>
                <CardTitle className="text-[#1F2937]">Консультации</CardTitle>
                <CardDescription>
                  Профессиональные юридические консультации по всем вопросам права
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Handshake" size={24} className="text-[#1F2937]" />
                </div>
                <CardTitle className="text-[#1F2937]">Договорное право</CardTitle>
                <CardDescription>
                  Составление, анализ и сопровождение договоров любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-[#1F2937]" />
                </div>
                <CardTitle className="text-[#1F2937]">Судебное представительство</CardTitle>
                <CardDescription>
                  Защита ваших интересов в судах всех инстанций
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" className="px-6 py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Судебная практика</h2>
            <p className="text-xl text-gray-600">Успешные кейсы нашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#1F2937]">Корпоративные споры</CardTitle>
                <CardDescription>
                  Выиграно 95% дел по корпоративным спорам за последний год
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-green-600">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-semibold">42 успешных дела</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#1F2937]">Коммерческие споры</CardTitle>
                <CardDescription>
                  Взыскано более 50 млн рублей задолженности для наших клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-green-600">
                  <Icon name="TrendingUp" size={20} />
                  <span className="font-semibold">50+ млн рублей</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">Контакты</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-[#1F2937]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F2937]">Адрес офиса</p>
                  <p className="text-gray-600">г. Москва, ул. Тверская, д. 15, оф. 301</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-[#1F2937]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F2937]">Телефон</p>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-[#1F2937]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F2937]">Email</p>
                  <p className="text-gray-600">info@urkonsalt.ru</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/img/20237d49-5263-4094-9c2c-ea8a7543448f.jpg" 
              alt="Профессиональная встреча с клиентом"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">ЮрКонсалт</div>
          <p className="text-gray-300 mb-4">Профессиональная правовая поддержка</p>
          <p className="text-gray-400 text-sm">© 2024 ЮрКонсалт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;