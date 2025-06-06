// configs/tours/sergiev-posad-tour.ts

// configs/tours/sergiev-posad-tour-metadata.ts

import { Metadata } from "next";

export const sergievPosadTourMetadata: Metadata = {
  title: "Экскурсия в Сергиев Посад | Автобусные туры из Москвы",
  description:
    "Откройте духовное наследие России в Сергиевом Посаде. Посетите Троице-Сергиеву лавру и музей фарфора в одном туре.",
  keywords:
    "Сергиев Посад, экскурсия Сергиев Посад, автобусный тур, Троице-Сергиева лавра, музей фарфора, тур из Москвы",
  openGraph: {
    title: "Экскурсия в Сергиев Посад | Автобусные туры из Москвы",
    description:
      "Откройте для себя духовный центр России — Сергиев Посад. Тур с посещением Лавры и музея фарфора.",
    images: ["/images/sergiev_posad/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Экскурсия в Сергиев Посад",
    description:
      "Автобусная экскурсия в Сергиев Посад с посещением Троице-Сергиевой Лавры и музея фарфора.",
    images: ["/images/sergiev_posad/hero.png"],
  },
  icons: {
    // icon: "/images/4trip-logo-black.svg",
  },
};

export const sergievPosadTour = {
  slug: "sergiev-posad",
  title: "Сергиев Посад",
  price: 3500,
  hero: {
    image: "/images/sergiev_posad/hero.png",
    description:
      "Откройте для себя духовный центр России и прикоснитесь к великим традициям русского монашества",
  },
  attractions: [
    {
      image: "/images/sergiev_posad/Trinity-Lavra-of-St.-Sergius.png",
      alt: "Интерьер Троице-Сергиевой лавры",
      title: "Троице-Сергиева лавра",
      description: [
        "Главная святыня города, основанная преподобным Сергием Радонежским в 14 веке.",
        "Подлинные фрески Андрея Рублева, древние колокола и духовная атмосфера.",
      ],
    },
    {
      image: "/images/sergiev_posad/Porcelain-Factory-and-Museum.png",
      alt: "Музей фарфора",
      title: "Фарфоровый завод и музей",
      description: [
        "Посетим легендарный завод Императорского фарфора, узнаем о процессе создания изящных сервизов.",
        "Посмотрим коллекции 18–20 веков.",
      ],
    },
  ],
  learnMore: [
    "историю основания Лавры;",
    "секреты древней росписи Андрея Рублева;",
    "процесс производства фарфора;",
    "роль Сергия Радонежского в русской истории;",
    "какие легенды окружают монастырь;",
    "современную жизнь монахов и традиции.",
  ],
  details: [
    "дети до 7 лет могут путешествовать в составе сборной группы только по согласованию;",
    "несовершеннолетние дети (с 7 до 18 лет) участвуют в сборных группах только в сопровождении своих законных представителей;",
    "транспортное обслуживание по программе: автобус туристического класса. При группе менее 24 человек предоставляется микроавтобус туристического класса;",
    "одеваемся по погоде;",
    "фотосъемка разрешена.",
  ],
  meetingPoint: {
    mapSrc:
      "https://yandex.ru/map-widget/v1/?ll=38.126953,56.315941&z=14&pt=38.126953,56.315941,pm2rdm",
    info: [
      { label: "Тип экскурсии", value: "Групповая сборная" },
      { label: "Время начала", value: "09:00" },
      { label: "Длительность", value: "около 8 ч." },
      {
        label: "Место встречи",
        value: 'Москва, метро "Комсомольская", выход к Ленинградскому вокзалу',
      },
      { label: "Размер группы", value: "До 30 человек" },
      { label: "Для кого", value: "Можно с детьми" },
      { label: "Язык экскурсии", value: "Русский" },
      { label: "Стоимость", value: "3 500 ₽ с человека" },
    ],
  },
  gallery: [
    {
      src: "/images/sergiev_posad/gallery1.png",
      alt: "Галерея 1 Сергиев Посад",
    },
    {
      src: "/images/sergiev_posad/gallery2.png",
      alt: "Галерея 2 Сергиев Посад",
    },
    {
      src: "/images/sergiev_posad/gallery3.png",
      alt: "Галерея 3 Сергиев Посад",
    },
    {
      src: "/images/sergiev_posad/gallery4.png",
      alt: "Галерея 4 Сергиев Посад",
    },
  ],
  faq: [
    {
      question: "Сколько длится экскурсия?",
      answer: "Экскурсия длится примерно 8 часов, включая переезд.",
    },
    {
      question: "Включен ли трансфер?",
      answer:
        'Да, автобус от метро "Комсомольская" до Сергиева Посада и обратно включен.',
    },
    {
      question: "Можно ли взять с собой детей?",
      answer:
        "Экскурсия подходит для всей семьи, дети от 7 лет в сопровождении взрослых.",
    },
  ],
};

export const sergievPosadTourWithMeta = {
  ...sergievPosadTour,
  metadata: sergievPosadTourMetadata,
};
