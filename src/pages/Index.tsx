import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-secondary">СГК-СТРОЙГРАДКАПИТАЛ</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#company" className="text-gray-700 hover:text-primary transition-colors">Компания</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Строительство</a>
              <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Проекты</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-secondary mb-6">
                Надежное строительство для вашего будущего
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                ООО «СГК-СТРОЙГРАДКАПИТАЛ» — ваш надежный партнер в жилищном и коммерческом строительстве. 
                Профессиональный подход, качественные материалы и соблюдение всех стандартов.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="FolderOpen" className="h-5 w-5 mr-2" />
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1da66c1f-7c3e-4d0d-aad9-adf71e38af02.jpg" 
                alt="Строительная компания" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр строительных услуг для частных лиц и бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Home" className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Жилищное строительство</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Строительство частных домов, коттеджей и ремонт квартир под ключ
                </CardDescription>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Проектирование и строительство домов</li>
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Ремонт и реконструкция квартир</li>
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Отделочные работы любой сложности</li>
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Сантехнические и электромонтажные работы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Building2" className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Коммерческое строительство</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Строительство офисов, магазинов и коммерческих помещений
                </CardDescription>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Офисные центры и бизнес-комплексы</li>
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Торговые помещения и магазины</li>
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Рестораны и кафе</li>
                  <li className="flex items-center"><Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />Складские помещения</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Преимущества работы с СГК-СТРОЙГРАДКАПИТАЛ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Предоставляем гарантию на все виды выполненных работ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Соблюдение сроков</h3>
              <p className="text-gray-600">Всегда завершаем проекты в установленные сроки</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытная команда</h3>
              <p className="text-gray-600">Квалифицированные специалисты с многолетним опытом</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Реализованные проекты</h2>
            <p className="text-xl text-gray-600">Примеры наших успешных проектов</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Проект 1 - Ремонт квартиры */}
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/c7f1b209-7e95-4f38-9dd9-4feb00f75f7b.jpg" 
                  alt="Ремонт квартиры" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm">
                  Жилищное
                </div>
              </div>
              <CardHeader>
                <CardTitle>Ремонт квартиры премиум-класса</CardTitle>
                <CardDescription>
                  Полная реконструкция 3-комнатной квартиры 120 м² с дизайнерским ремонтом
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    6 месяцев
                  </span>
                  <span className="flex items-center">
                    <Icon name="Home" className="h-4 w-4 mr-1" />
                    120 м²
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Проект 2 - Офисный центр */}
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/2c4dfe28-981b-44b8-993b-3b5ce4628f18.jpg" 
                  alt="Офисный центр" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm">
                  Коммерческое
                </div>
              </div>
              <CardHeader>
                <CardTitle>Офисный центр "Бизнес-Плаза"</CardTitle>
                <CardDescription>
                  Строительство современного офисного здания с подземным паркингом
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    18 месяцев
                  </span>
                  <span className="flex items-center">
                    <Icon name="Building2" className="h-4 w-4 mr-1" />
                    5000 м²
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Проект 3 - Частный дом */}
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/c2533000-1be9-4b05-b982-ea324f3e276b.jpg" 
                  alt="Частный дом" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm">
                  Жилищное
                </div>
              </div>
              <CardHeader>
                <CardTitle>Загородный дом "Комфорт"</CardTitle>
                <CardDescription>
                  Строительство двухэтажного дома с террасой и ландшафтным дизайном
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    12 месяцев
                  </span>
                  <span className="flex items-center">
                    <Icon name="Home" className="h-4 w-4 mr-1" />
                    250 м²
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Проект 4 - Магазин */}
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/e598e445-0fbf-4fa3-85f3-b3df71cf6e5f.jpg" 
                  alt="Магазин" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm">
                  Коммерческое
                </div>
              </div>
              <CardHeader>
                <CardTitle>Торговый центр "Модерн"</CardTitle>
                <CardDescription>
                  Реконструкция торгового помещения с современным дизайном
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    4 месяца
                  </span>
                  <span className="flex items-center">
                    <Icon name="ShoppingBag" className="h-4 w-4 mr-1" />
                    800 м²
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Проект 5 - Кухня */}
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/0995b405-842d-4240-891d-e01739c3a680.jpg" 
                  alt="Кухня" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm">
                  Жилищное
                </div>
              </div>
              <CardHeader>
                <CardTitle>Кухня-студия "Элит"</CardTitle>
                <CardDescription>
                  Создание просторной кухни-студии с островом и премиальной техникой
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    2 месяца
                  </span>
                  <span className="flex items-center">
                    <Icon name="ChefHat" className="h-4 w-4 mr-1" />
                    45 м²
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Проект 6 - Ресторан */}
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/6501d3b3-01d3-4beb-82d3-f6f97ebb6867.jpg" 
                  alt="Ресторан" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm">
                  Коммерческое
                </div>
              </div>
              <CardHeader>
                <CardTitle>Ресторан "Атмосфера"</CardTitle>
                <CardDescription>
                  Полное оформление ресторана с современным интерьером и профессиональной кухней
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    8 месяцев
                  </span>
                  <span className="flex items-center">
                    <Icon name="Utensils" className="h-4 w-4 mr-1" />
                    300 м²
                  </span>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="FolderOpen" className="h-5 w-5 mr-2" />
              Посмотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8">Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами удобным способом</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5" />
                  <span>info@sgk-stroygradkapital.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5" />
                  <span>г. Москва, ул. Строительная, д. 15</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Заказать звонок</h3>
              <form className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-white border-gray-300 text-gray-900"
                />
                <Input 
                  placeholder="Телефон" 
                  className="bg-white border-gray-300 text-gray-900"
                />
                <Textarea 
                  placeholder="Сообщение" 
                  className="bg-white border-gray-300 text-gray-900"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 ООО «СГК-СТРОЙГРАДКАПИТАЛ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;