import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <nav className="mb-12 flex justify-center gap-6 text-stone-600 font-medium">
          <a href="#about" className="hover:text-stone-900 transition-colors">О нас</a>
          <a href="#products" className="hover:text-stone-900 transition-colors">Ассортимент</a>
          <a href="#order" className="hover:text-stone-900 transition-colors">Заказать</a>
        </nav>
        <header id="about" className="mb-24 text-center scroll-mt-12 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-400 mb-10">
            Обжарка «Кварта»
          </h1>
          {/* <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-500 mb-4">
            Кто мы?
          </h3> */}
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-stone-400 leading-relaxed">
              Мы - маленькая мастерская в Минске. Основатели Аня и Дмитрий в прошлом работали бариста, а с 2019 года жарим свой кофе партиями по 5 кг.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-4">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <div className="text-xl font-semibold text-stone-800 mb-2">🔥 Жарим по четвергам</div>
                <p className="text-stone-600">Небольшими партиями, чтобы контролировать профиль каждой чашки.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <div className="text-xl font-semibold text-stone-800 mb-2">🚚 Развозим по пятницам</div>
                <p className="text-stone-600">Доставляем по всему Минску. Вы получили кофе к выходным!</p>
              </div>
            </div>

            <div className="bg-stone-800 text-stone-50 p-8 rounded-3xl mt-4">
              <p className="text-xl md:text-2xl font-medium">
                Свежесть - это главное, что мы продаем.
              </p>
              <p className="text-stone-300 mt-2">
                Зерно попадает к вам в руки на 1-3 день после обжарки.
              </p>
            </div>
          </div>
        </header>

        <section id="products" className="mb-24 flex justify-center scroll-mt-12">
          <div className="w-full text-center text-stone-400 py-12 border-2 border-dashed border-stone-200 rounded-2xl">
            Блок с карточками кофе
          </div>
        </section>

        <section id="order" className="flex justify-center bg-stone-100 p-8 md:p-12 rounded-3xl scroll-mt-12">
          <div className="w-full flex flex-col md:flex-row gap-12 items-center justify-between max-w-3xl">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-stone-900 mb-4">Заказать кофе</h2>
              <p className="text-stone-700 mb-2">Самовывоз: ул. Короля, 9</p>
              <p className="text-stone-700 mb-2">Доставка: по пятницам (от 50 BYN - бесплатно)</p>
            </div>
            <LeadForm />
          </div>
        </section>
      </div>
    </main>
  );
}
