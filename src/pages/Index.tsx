import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Target, Trophy, Users, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">Павел П.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">О себе</a>
              <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#results" className="text-gray-300 hover:text-orange-500 transition-colors">Результаты</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Твой путь к
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  {" "}успеху{" "}
                </span>
                начинается здесь
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Я помогаю амбициозным людям разблокировать их потенциал и достичь невероятных высот. 
                Как байкер покоряет дороги, так и ты покоришь свои цели.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Начать трансформацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Посмотреть результаты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30 flex items-center justify-center p-4">
                <img
                  src={`${import.meta.env.BASE_URL}pavelp-work.jpg`}
                  alt="Павел П. в деловом стиле"
                  className="max-h-80 w-auto mx-auto rounded-xl shadow-lg object-cover border-4 border-orange-500/40"
                  style={{ maxHeight: '20rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Кто такой <span className="text-orange-500">Павел П.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Предприниматель, бизнес-коуч и страстный байкер, который превратил свою жизнь 
              в невероятную историю успеха
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center p-4">
                <img
                  src={`${import.meta.env.BASE_URL}pavelp-moto.png`}
                  alt="Павел П. на мотоцикле"
                  className="max-h-80 w-auto mx-auto rounded-xl shadow-lg object-cover border-4 border-orange-500/40"
                  style={{ maxHeight: '20rem' }}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">От мечтателя до миллионера</h3>
                <p className="text-gray-300 leading-relaxed">
                  Начинал как обычный офисный работник, но всегда знал, что предназначен для большего. 
                  Как и настоящий байкер, не боялся рисковать и выбирать сложные маршруты.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Сегодня я помог тысячам людей изменить свою жизнь, построить прибыльный бизнес 
                  и обрести финансовую свободу. Моя философия проста: жизнь - это дорога, 
                  и ты можешь выбрать, ехать ли в пробке или мчаться к своим целям на полной скорости.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-orange-500 text-lg">1000+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">Успешных учеников</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-orange-500 text-lg">50M+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">Рублей заработано учениками</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Твой <span className="text-orange-500">маршрут</span> к успеху
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Каждая программа - это точно проложенный маршрут к твоим целям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-white text-xl">Индивидуальный коучинг</CardTitle>
                <CardDescription className="text-gray-400">
                  Персональная работа один на один
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Как опытный гид покажет тебе скрытые тропы к вершине успеха. 
                  Индивидуальный подход к каждому ученику.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Забронировать сессию
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-white text-xl">Групповые программы</CardTitle>
                <CardDescription className="text-gray-400">
                  Мощная синергия единомышленников
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Как байкеры в колонне поддерживают друг друга, так и ты найдешь 
                  команду амбициозных людей на пути к общим целям.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Trophy className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-white text-xl">VIP наставничество</CardTitle>
                <CardDescription className="text-gray-400">
                  Эксклюзивное сопровождение к миллионам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Для тех, кто готов ехать на максимальной скорости. 
                  Прямой доступ ко мне 24/7 и секретные стратегии роста.
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Стать VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Результаты моих <span className="text-orange-500">учеников</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Каждая история - это доказательство того, что мечты становятся реальностью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Алексей М.", result: "Увеличил доход в 10 раз", time: "за 6 месяцев" },
              { name: "Мария К.", result: "Запустила онлайн-школу", time: "заработала 5M₽" },
              { name: "Дмитрий В.", result: "Построил IT-империю", time: "с нуля до 50M₽" },
              { name: "Анна Р.", result: "Стала топ-коучем", time: "за 8 месяцев" },
              { name: "Игорь С.", result: "Создал франшизу", time: "в 15 городах" },
              { name: "Елена Т.", result: "Финансовая свобода", time: "пассивный доход 500K₽" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-500 font-semibold">{testimonial.result}</p>
                  <p className="text-gray-400 text-sm">{testimonial.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Готов начать свой <span className="text-orange-500">путь</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Каждый день промедления - это упущенная возможность изменить свою жизнь. 
            Твое время пришло!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Записаться на консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Скачать бесплатную книгу
            </Button>
          </div>
          
          <p className="text-gray-400">
            Telegram: @PavelP_Coach | Email: pavel@success-route.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bike className="h-6 w-6 text-orange-500" />
            <span className="text-white font-bold">Павел П. - Твой проводник к успеху</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Все права защищены. Жизнь - это дорога, выбирай свой маршрут мудро.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
