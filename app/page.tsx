import LeadForm from "@/components/LeadForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="sticky top-0 z-50 w-full pt-4 pb-8 mb-4 flex justify-center group">
          <nav className="opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 flex justify-center gap-6 text-xl text-stone-800 font-medium bg-white/70 backdrop-blur-md px-8 py-4 rounded-full shadow-sm transition-all duration-500">
            <a href="#about" className="hover:text-stone-700 transition-colors">О нас</a>
            <a href="#products" className="hover:text-stone-700 transition-colors">Ассортимент</a>
            <a href="#order" className="hover:text-stone-700 transition-colors">Заказать</a>
          </nav>
        </div>
        <header id="about" className="mb-24 text-center scroll-mt-12 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-300 mb-10">
            Обжарка «Кварта»
          </h1>
          {/* <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-500 mb-4">
            Кто мы?
          </h3> */}
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
              Мы - маленькая мастерская в Минске. Основатели Аня и Дмитрий в прошлом работали бариста, а с 2019 года жарим свой кофе партиями по 5 кг.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-4">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <div className="text-xl font-semibold text-stone-800 mb-2">🔥 Жарим по четвергам</div>
                <p className="text-stone-600">Небольшими партиями, чтобы контролировать профиль каждой чашки.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <div className="text-xl font-semibold text-stone-800 mb-2">🚚 Развозим по пятницам</div>
                <p className="text-stone-600">Доставляем по всему Минску. Вы получите кофе к выходным!</p>
              </div>
            </div>

            <div className="bg-stone-700 text-stone-50 p-8 rounded-3xl mt-4">
              <p className="text-xl md:text-2xl font-medium">
                Свежесть - это главное, что мы продаем.
              </p>
              <p className="text-stone-300 mt-2">
                Зерно попадает к вам в руки на 1-3 день после обжарки.
              </p>
            </div>
          </div>
        </header>

        <section id="products" className="mb-24 scroll-mt-12 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-300 mb-10">Наш кофе</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col hover:border-stone-300 transition-colors">
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">Эфиопия Иргачеффе</h3>
                  <p className="text-stone-500 mb-6">цветочный, бергамот, светлая обжарка · 250 г</p>
                </div>
                <div className="relative w-30 h-30 shrink-0 rounded-2xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                  <Image src="/products/3.jpg" alt="Эфиопия Иргачеффе" fill className="object-cover" />
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-stone-800">32 BYN</span>
                <a href="#order" className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-colors">
                  Выбрать
                </a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col hover:border-stone-300 transition-colors">
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">Колумбия Уила</h3>
                  <p className="text-stone-500 mb-6">карамель, красное яблоко · 250 г</p>
                </div>
                <div className="relative w-30 h-30 shrink-0 rounded-2xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                  <Image src="/products/1.jpg" alt="Колумбия Уила" fill className="object-cover" />
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-stone-800">29 BYN</span>
                <a href="#order" className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-colors">
                  Выбрать
                </a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col hover:border-stone-300 transition-colors">
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">Бразилия Серрадо</h3>
                  <p className="text-stone-500 mb-6">орех, шоколад, под эспрессо · 250 г</p>
                </div>
                <div className="relative w-30 h-30 shrink-0 rounded-2xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                  <Image src="/products/2.jpg" alt="Бразилия Серрадо" fill className="object-cover" />
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-stone-800">26 BYN</span>
                <a href="#order" className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-colors">
                  Выбрать
                </a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col hover:border-stone-300 transition-colors">
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">Дрип-пакеты, ассорти</h3>
                  <p className="text-stone-500 mb-6">10 штук</p>
                </div>
                <div className="relative w-30 h-30 shrink-0 rounded-2xl overflow-hidden bg-stone-100 border border-stone-100 shadow-sm">
                  <Image src="/products/drip.jpg" alt="Дрип-пакеты" fill className="object-cover" />
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-stone-800">18 BYN</span>
                <a href="#order" className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-colors">
                  Выбрать
                </a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 mt-4 bg-[#D97757] text-white p-8 md:p-10 rounded-3xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Самое выгодное
                </div>
                <h3 className="text-3xl font-bold mb-2">Кофейная подписка</h3>
                <p className="text-white/90 text-lg max-w-md">
                  2 пачки по 250 г раз в месяц. Мы сами подберем интересные лоты, а доставка всегда будет <span className="font-semibold underline decoration-white/50 underline-offset-4">бесплатной</span>.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-start md:items-end w-full md:w-auto shrink-0">
                <span className="text-4xl font-bold mb-4">54 BYN <span className="text-xl font-medium opacity-80">/ мес</span></span>
                <a href="#order" className="w-full md:w-auto text-center px-8 py-4 bg-white text-[#D97757] font-semibold rounded-xl hover:bg-stone-50 transition-colors shadow-sm">
                  Оформить подписку
                </a>
              </div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>

          </div>
        </section>

        <section id="order" className="flex justify-center bg-stone-100 p-8 md:p-12 rounded-3xl scroll-mt-12 w-full">
          <div className="w-full flex flex-col md:flex-row gap-12 items-center md:items-start justify-between max-w-5xl">

            <div className="flex-1 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Заказать кофе</h2>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Оставьте заявку, и мы перезвоним, чтобы всё подтвердить. Оплата при получении.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="text-2xl bg-white p-3 rounded-2xl shadow-sm">📍</div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800">Самовывоз</h4>
                    <p className="text-stone-600">Минск, ул. Короля, 9</p>
                    <p className="text-stone-500 text-sm mt-1">пн–пт 8:00–20:00, сб-вс 10:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl bg-white p-3 rounded-2xl shadow-sm">🚚</div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800">Доставка по Минску</h4>
                    <p className="text-stone-600">Развозим заказы по пятницам</p>
                    <p className="text-stone-500 text-sm mt-1">От 50 BYN - бесплатно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[400px] shrink-0">
              <LeadForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
